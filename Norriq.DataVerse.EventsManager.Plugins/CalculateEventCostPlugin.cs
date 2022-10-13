using System;
using System.Runtime.Remoting.Contexts;
using System.Runtime.Remoting.Services;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using Norriq.DataVerse.EventsManager.Plugins.Helpers;
using Norriq.DataVerse.Plugins.BaseLayer;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.EventsManager.Plugins
{
    public class CalculateEventCostPlugin : BasePlugin
    {
        private readonly Money CongressCost = new Money(2000);
        private readonly Money MarketingCost = new Money(8000);
        private readonly string EventTypeCongress = "congress";
        private readonly string EventTypeMarketing = "marketing";

        protected override void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            switch(context.MessageName)
            {
                case MsgCreate:
                    SetPriceOnCreate(context, service, tracingService);
                    break;

                case MsgUpdate:
                    SetPriceOnUpdate(context, service, tracingService);
                    break;
            }
        }

        private bool ContainEntityReferenceTarget(IPluginExecutionContext context)
        {
            return context.InputParameters.Contains("Target")
                    && context.InputParameters["Target"] is EntityReference;
        }

        private bool IsCongressEvent(string eventType)
        {
            return string.Equals(EventTypeCongress, eventType, StringComparison.OrdinalIgnoreCase);
        }

        private bool IsMarketingEvent(string eventType)
        {
            return string.Equals(EventTypeMarketing, eventType, StringComparison.OrdinalIgnoreCase);
        }

        private void SetPriceOnCreate(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            if (!context.ContainsTargetAsEntity(out var entity))
                return;

            if (!string.Equals(entity.LogicalName, "nrq_event", StringComparison.OrdinalIgnoreCase))
                return;

            tracingService.LogTrace($"{nameof(CalculateEventCostPlugin)}: Primary Entity ID = {1}, Primary Entity Name: {0}",
                context.PrimaryEntityId, context.PrimaryEntityName);

            var @event = service.Retrieve(entity.LogicalName, entity.Id,
                new ColumnSet("nrq_eventtypeid"));

            // get the Id from the entity in the context
            var eventType = @event.GetAttributeValue<EntityReference>("nrq_eventtypeid");
            tracingService.LogTrace($"{nameof(CalculateEventCostPlugin)}: Event Type On Create = {0}",
                eventType.Name);

            if (IsCongressEvent(eventType.Name))
            {
                tracingService.LogTrace($"{nameof(CalculateEventCostPlugin)}: Modify Price For Event Type = {0}, Price = {1}", EventTypeCongress, CongressCost);
                @event["nrq_totalcost"] = CongressCost;
                service.Update(@event);
            }
            else if (IsMarketingEvent(eventType.Name))
            {
                tracingService.LogTrace($"{nameof(CalculateEventCostPlugin)}: Modify Price For Event Type = {0}, Price = {1}", EventTypeMarketing, MarketingCost);
                @event["nrq_totalcost"] = MarketingCost;
                service.Update(@event);
            }
        }

        private void SetPriceOnUpdate(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            //context.PreEntityImages.TryGetValue("PreImage", out var entity);

            //if (!context.ContainsTargetAsEntity(out var entity)) return;

            //if (!string.Equals(entity.LogicalName, "nrq_event", StringComparison.OrdinalIgnoreCase)) return;


        }
    }
}
