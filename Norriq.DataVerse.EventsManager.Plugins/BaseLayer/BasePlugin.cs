using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using Norriq.DataVerse.BaseLayer.EnvironmentSettingsProvider;
using Norriq.DataVerse.Plugins.BaseLayer.Serialization;
using Microsoft.Xrm.Sdk.PluginTelemetry;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.Plugins.BaseLayer
{
    public abstract class BasePlugin : IPlugin
    {
        /// <summary>
        /// Norriq provided BasePlugin.
        /// This class contains propriatary code, which is not customer specific, but houses generic helper methods for easier development.
        /// </summary>
        protected const int StagePreValidation = 10;

        protected const int StagePreOperation = 20;
        protected const int StagePostOperation = 40;

        protected const string MsgCreate = "Create";
        protected const string MsgUpdate = "Update";
        protected const string MsgSetState = "SetState";
        protected const string MsgSetStateDynamicEntity = "SetStateDynamicEntity";
        protected const string MsgAssign = "Assign";
        protected const string MsgAssociate = "Associate";
        protected const string MsgDisassociate = "Disassociate";
        protected const string MsgAddItem = "AddItem";
        protected const string MsgMerge = "Merge";
        protected const string MsgRevise = "Revise";
        protected const string MsgDelete = "Delete";

        protected string _secureConfig = "";
        protected string _unsecureConfig = "";

        protected Entity _preImage;
        protected Entity _postImage;
        protected Entity _target;
        protected EntityReference _targetRef;
        protected Guid _userId;
        protected OptionSetValue _state;
        protected OptionSetValue _status;
        protected Relationship _relationship;
        protected EntityReferenceCollection _relatedEntityRefs;

        protected SettingsProvider _settings;

        protected JSONSerializer _jsonSerializer;

        public BasePlugin()
        {
        }

        public BasePlugin(string unsecure) => _unsecureConfig = unsecure;

        public BasePlugin(string unsecure, string secure)
        {
            _unsecureConfig = unsecure;
            _secureConfig = secure;
        }

        public void Execute(IServiceProvider serviceProvider)
        {
            try
            {
                var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));

                var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
                var service = serviceFactory.CreateOrganizationService(context.UserId);
                var tracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
                var logger = (ILogger)serviceProvider.GetService(typeof(ILogger));

                var customTracingAttribute = new Dictionary<string, object>
                {
                    ["CorrelationId"] = context.CorrelationId.ToString(),
                    ["EntityId"] = context.PrimaryEntityId.ToString(),
                    ["EntityName"] = context.PrimaryEntityName.ToString(),
                    ["InitiatingUser"] = context.InitiatingUserId.ToString(),
                    ["UserId"] = context.UserId.ToString(),
                    ["OrganizationName"] = context.OrganizationName.ToString(),
                    ["MessageName"] = context.MessageName.ToString(),
                    ["Stage"] = context.Stage
                };

                var aiTracingService = new AppInsightsTracingService(logger, tracingService);

                using (aiTracingService.BeginScope(customTracingAttribute))
                {
                    aiTracingService.LogTrace($"Entered {GetType().FullName} plugin.");

                    Initialize(context, service);
                    Execute(context, service, aiTracingService);
                }
            }
            catch (Exception ex)
            {
                if (ex is InvalidPluginExecutionException)
                {
                    throw ex;
                }
                else if (ex is FaultException<OrganizationServiceFault>)
                {
                    var fault = ex as FaultException<OrganizationServiceFault>;
                    var detail = fault.Detail;
                    throw new InvalidPluginExecutionException(string.Format("{0} {1} {2} {3}", fault.Action, fault.Code, fault.Message, detail.Message), ex);
                }
                else
                {
                    throw new InvalidPluginExecutionException(string.Format("{0}: {1}", ex.GetType().FullName, ex.Message), ex);
                }
            }
        }

        protected abstract void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService);

        private void Initialize(IPluginExecutionContext context, IOrganizationService service)
        {
            if (context.InputParameters.Contains("Target"))
            {
                if (context.InputParameters["Target"] is Entity)
                {
                    _target = context.InputParameters["Target"] as Entity;
                    _targetRef = _target.ToEntityReference();
                }
                else if (context.InputParameters["Target"] is EntityReference)
                {
                    _targetRef = context.InputParameters["Target"] as EntityReference;
                }
            }
            if (context.InputParameters.Contains("EntityMoniker"))
            {
                if (context.InputParameters["EntityMoniker"] is EntityReference)
                {
                    _targetRef = context.InputParameters["EntityMoniker"] as EntityReference;
                }
                if (context.InputParameters.Contains("State"))
                {
                    if (context.InputParameters["State"] is OptionSetValue)
                    {
                        _state = context.InputParameters["State"] as OptionSetValue;
                    }
                }
                if (context.InputParameters.Contains("Status"))
                {
                    if (context.InputParameters["Status"] is OptionSetValue)
                    {
                        _status = context.InputParameters["Status"] as OptionSetValue;
                    }
                }
            }
            if (context.PreEntityImages.Contains("PreImage") && context.PreEntityImages["PreImage"] is Entity)
            {
                _preImage = context.PreEntityImages["PreImage"] as Entity;
            }
            if (context.PostEntityImages.Contains("PostImage") && context.PostEntityImages["PostImage"] is Entity)
            {
                _postImage = context.PostEntityImages["PostImage"] as Entity;
            }
            if (_postImage == null && _preImage != null && _target != null)
            {
                _postImage = Combine(_preImage, _target);
            }
            if (_postImage == null && _preImage == null && _target != null)
            {
                _postImage = _target;
            }
            if (_postImage == null && _preImage != null && _target == null)
            {
                _postImage = _preImage;
            }
            if (context.InputParameters.Contains("Relationship"))
            {
                _relationship = context.InputParameters["Relationship"] as Relationship;
            }
            if (context.InputParameters.Contains("RelatedEntities") && context.InputParameters["RelatedEntities"] is EntityReferenceCollection)
            {
                _relatedEntityRefs = context.InputParameters["RelatedEntities"] as EntityReferenceCollection;
            }
            _userId = context.InitiatingUserId;
            _settings = new SettingsProvider(service);
            _jsonSerializer = new JSONSerializer();
        }

        private static Entity Combine(Entity e1, Entity e2)
        {
            var result = new Entity() { LogicalName = e1.LogicalName, Id = e1.Id };
            foreach (var attribute in e1.Attributes)
            {
                result[attribute.Key] = attribute.Value;
            }
            foreach (var attribute in e2.Attributes)
            {
                if (result.Contains(attribute.Key))
                {
                    result.Attributes.Remove(attribute.Key);
                }

                result[attribute.Key] = attribute.Value;
            }
            return result;
        }

        protected T GetValue<T>(string attribute)
        {
            if (_target != null && _target.Contains(attribute))
            {
                return _target.GetAttributeValue<T>(attribute);
            }
            else
            {
                if (_preImage != null && _preImage.Contains(attribute))
                {
                    return _preImage.GetAttributeValue<T>(attribute);
                }

                if (_postImage != null && _postImage.Contains(attribute))
                {
                    return _postImage.GetAttributeValue<T>(attribute);
                }
            }
            return default;
        }

        protected T GetPreValue<T>(string attribute) => _preImage != null && _preImage.Contains(attribute) ? _preImage.GetAttributeValue<T>(attribute) : (default);

        protected T GetPostValue<T>(string attribute) => _postImage != null && _postImage.Contains(attribute) ? _postImage.GetAttributeValue<T>(attribute) : (default);

        protected string GetFormattedValue(string attribute)
        {
            if (_target != null && _target.Contains(attribute) && _target.FormattedValues.ContainsKey(attribute))
            {
                return _target.FormattedValues[attribute];
            }
            else
            {
                if (_preImage != null && _preImage.Contains(attribute) && _preImage.FormattedValues.ContainsKey(attribute))
                {
                    return _preImage.FormattedValues[attribute];
                }

                if (_postImage != null && _postImage.Contains(attribute) && _postImage.FormattedValues.ContainsKey(attribute))
                {
                    return _postImage.FormattedValues[attribute];
                }
            }

            return string.Empty;
        }

        protected string[] GetAttributes<T>()
        {
            var attributes = new List<string>();
            attributes.AddRange(GetAttributes<T>(_target));
            attributes.AddRange(GetAttributes<T>(_preImage));
            attributes.AddRange(GetAttributes<T>(_postImage));
            return attributes.Distinct().ToArray();
        }

        private string[] GetAttributes<T>(Entity e) => e == null
                ? (new string[] { })
                : e.Attributes.Where(field => field.Value != null && field.Value is T).Select(field => field.Key).ToArray();

        protected bool Contains(string attributeName)
        {
            if (TargetContains(attributeName))
            {
                return true;
            }
            else
            {
                if (PreContains(attributeName))
                {
                    return true;
                }

                if (PostContains(attributeName))
                {
                    return true;
                }
            }
            return false;
        }

        protected bool TargetContains(string attributeName) => _target != null && _target.Contains(attributeName);

        protected bool TargetContains(string[] attributeNames)
        {
            var check = true;
            foreach (var att in attributeNames)
            {
                check = TargetContains(att);
            }
            return check;
        }

        protected bool PreContains(string attributeName) => _preImage != null && _preImage.Contains(attributeName);

        protected bool PostContains(string attributeName) => _postImage != null && _postImage.Contains(attributeName);

        protected string GetOptionSetValueLabel(IOrganizationService service, string attribute)
        {
            var option = GetValue<OptionSetValue>(attribute);
            if (option == null)
            {
                return string.Empty;
            }

            var attributeRequest = new RetrieveAttributeRequest
            {
                EntityLogicalName = _target.LogicalName,
                LogicalName = attribute,
                RetrieveAsIfPublished = true
            };
            var attributeResponse = service.Execute(attributeRequest) as RetrieveAttributeResponse;

            var attrMetadata = attributeResponse.AttributeMetadata;
            if (attrMetadata is StatusAttributeMetadata)
            {
                var statusMetaData = attrMetadata as StatusAttributeMetadata;
                foreach (var statusMeta in statusMetaData.OptionSet.Options)
                {
                    if (statusMeta.Value == option.Value)
                    {
                        return statusMeta.Label.UserLocalizedLabel.Label;
                    }
                }
            }
            else
            {
                var picklistMetadata = attrMetadata as PicklistAttributeMetadata;
                foreach (var optionMeta in picklistMetadata.OptionSet.Options)
                {
                    if (optionMeta.Value == option.Value)
                    {
                        return optionMeta.Label.UserLocalizedLabel.Label;
                    }
                }
            }
            return string.Empty;
        }

        protected bool HasChanged<T>(string attributeName)
        {
            var oldValue = _preImage == null ? default : _preImage.GetAttributeValue<T>(attributeName);
            var newValue = GetValue<T>(attributeName);

            return !AreEqual<T>(oldValue, newValue);
        }

        protected bool AreEqual<T>(T val1, T val2) => val1 == null && val2 == null ? true : val1 == null || val2 == null ? false : val1.Equals(val2);

        public const string noValue = "no";
        public const string yesValue = "yes";
    }
}