using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Norriq.DataVerse.BaseLayer.EnvironmentSettingsProvider
{
    public class SettingsProvider
    {
        private const string CacheKey = "Norriq.SettingsCache";
        private const string CacheTimeoutSetting = "Norriq.SettingsCacheTimeOut";
        private readonly IOrganizationService _service;
        private readonly CachingService _cachingService;

        protected Dictionary<string, string> KeyValuePairs { get; set; }

        public SettingsProvider(IOrganizationService service)
        {
            _service = service;
            _cachingService = new CachingService();
            if (_cachingService.Exists(CacheKey))
            {
                KeyValuePairs = _cachingService.Get<Dictionary<string, string>>(CacheKey);
                return;
            }

            GetSettings();
        }

        public virtual T GetValue<T>(string key, T defaultValue = default)
        {
            if (KeyValuePairs.TryGetValue(key.ToLower(), out var value))
            {
                if (typeof(T) == typeof(bool))
                {
                    switch (value)
                    {
                        case "yes":
                        case "ja":
                            return (T)(object)true;

                        case "no":
                        case "nee":
                            return (T)(object)false;

                        default:
                            return (T)Convert.ChangeType(value, typeof(T));
                    }
                }

                return (T)Convert.ChangeType(value, typeof(T));
            }
            else
            {
                return defaultValue;
            }
        }

        public virtual void SetValue(string key, string value)
        {
            key = key.ToLower();
            if (!KeyValuePairs.ContainsKey(key)) throw new ArgumentException($"Setting with key {key} does not exist.");

            KeyValuePairs[key] = value;

            UpdateEnvironmentVariable(key, value);
        }

        private void UpdateEnvironmentVariable(string key, string value)
        {
            var query = new QueryExpression("environmentvariabledefinition")
            {
                ColumnSet = new ColumnSet("environmentvariabledefinitionid")
            };
            query.Criteria.AddCondition("schemaname", ConditionOperator.Equal, key);
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);

            var valueLink = query.AddLink("environmentvariablevalue", "environmentvariabledefinitionid", "environmentvariabledefinitionid", JoinOperator.LeftOuter);
            valueLink.LinkCriteria.AddCondition("statecode", ConditionOperator.Equal, 0);
            valueLink.Columns = new ColumnSet("environmentvariablevalueid", "value");
            valueLink.EntityAlias = "value";

            var result = _service.RetrieveMultiple(query).Entities.FirstOrDefault();

            var newValue = new Entity("environmentvariablevalue")
            {
                ["value"] = value,
                ["environmentvariabledefinitionid"] = result.ToEntityReference()
            };

            if (result.Contains("value.environmentvariablevalueid"))
            {
                newValue.Id = (Guid)result.GetAttributeValue<AliasedValue>("value.environmentvariablevalueid").Value;
                _service.Update(newValue);
            }
            else
            {
                _service.Create(newValue);
            }

            GetSettings();
        }

        private void GetSettings()
        {
            if (KeyValuePairs == null) KeyValuePairs = LoadSettings();

            var cacheTimeout = GetValue<TimeSpan?>(CacheTimeoutSetting, new TimeSpan(12000));

            if (cacheTimeout != null && cacheTimeout.Value.Ticks != 0)
            {
                _cachingService.Add(CacheKey, KeyValuePairs, cacheTimeout.Value);
            }
        }

        private Dictionary<string, string> LoadSettings()
        {
            var query = new QueryExpression("environmentvariabledefinition")
            {
                ColumnSet = new ColumnSet("schemaname", "defaultvalue")
            };
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);
            var definitions = _service.RetrieveMultiple(query).Entities;

            query = new QueryExpression("environmentvariablevalue")
            {
                ColumnSet = new ColumnSet("value", "environmentvariabledefinitionid")
            };
            query.Criteria.AddCondition("statecode", ConditionOperator.Equal, 0);
            var values = _service.RetrieveMultiple(query).Entities;

            var entries = new Dictionary<string, string>();

            foreach (var definition in definitions)
            {
                var key = definition.GetAttributeValue<string>("schemaname");

                var value = values.FirstOrDefault(v => v.GetAttributeValue<EntityReference>("environmentvariabledefinitionid").Id == definition.Id)?.GetAttributeValue<string>("value") ?? definition.GetAttributeValue<string>("defaultvalue");

                if (!string.IsNullOrEmpty(value))
                {
                    entries.Add(key.ToLower(), value);
                }
            }

            return entries;
        }
    }
}