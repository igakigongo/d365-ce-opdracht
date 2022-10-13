using Microsoft.Xrm.Sdk;
using Norriq.DataVerse.Plugins.BaseLayer;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.EventsManager.Plugins
{
    public class CalculateEventCostPlugin : BasePlugin
    {
        protected override void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            tracingService.LogTrace($"Calculate cost for entity: {1}, and id: {0}", context.PrimaryEntityId, context.PrimaryEntityName);
        }
    }
}
