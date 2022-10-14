using System;
using Microsoft.Xrm.Sdk;
using Norriq.DataVerse.EventsManager.XrmContext.Models;
using Norriq.DataVerse.Plugins.BaseLayer;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.EventsManager.Plugins
{
    public class CalculateEventCostPlugin : BasePlugin
    {
        protected override void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            if (!string.Equals(_target.LogicalName, "nrq_event", StringComparison.OrdinalIgnoreCase))
                return;

            tracingService.LogTrace($"{nameof(CalculateEventCostPlugin)}: Action = {context.MessageName}");
            switch (context.MessageName)
            {
                case MsgCreate:
                case MsgUpdate:
                    OnCreateOrUpdateSetEventCost(service);
                    break;
            }
        }

        private void OnCreateOrUpdateSetEventCost(IOrganizationService service)
        {
            var nrqEvent = _target.ToEntity<nrq_Event>();
            var evtType = nrq_EventType.Retrieve(service, nrqEvent.nrq_EventTypeId.Id, x => x.nrq_Cost);
            nrqEvent.nrq_TotalCost = evtType.nrq_Cost;
        }
    }
}
