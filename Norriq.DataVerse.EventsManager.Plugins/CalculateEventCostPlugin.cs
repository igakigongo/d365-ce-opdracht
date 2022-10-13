using System;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Norriq.DataVerse.EventsManager.XrmContext.Models;
using Norriq.DataVerse.Plugins.BaseLayer;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.EventsManager.Plugins
{
    public class CalculateEventCostPlugin : BasePlugin
    {
        private readonly Money CongressCost = new Money(2000);
        private readonly Money MarketingCost = new Money(8000);

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

        private void SetPriceOnCreate(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            if (!string.Equals(_target.LogicalName, "nrq_event", StringComparison.OrdinalIgnoreCase))
                return;

            tracingService.LogTrace($"{nameof(CalculateEventCostPlugin)}: Primary Entity ID = {1}, Primary Entity Name: {0}",
                context.PrimaryEntityId, context.PrimaryEntityName);

            var nrqEvent = _target.ToEntity<nrq_Event>();

            var evtType = nrq_EventType.Retrieve(service, nrqEvent.nrq_EventTypeId.Id, x => x.nrq_Cost);
            nrqEvent.nrq_TotalCost = evtType.nrq_Cost;
        }

        private void SetPriceOnUpdate(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
        }
    }
}
