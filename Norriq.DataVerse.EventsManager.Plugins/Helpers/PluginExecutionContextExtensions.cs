using Microsoft.Xrm.Sdk;

namespace Norriq.DataVerse.EventsManager.Plugins.Helpers
{
    public static class PluginExecutionContextExtensions
    {
        public static bool ContainsTargetAsEntityReference(this IPluginExecutionContext context,
                out EntityReference entityReference)
        {
            var existsAsReference = context.InputParameters.Contains("Target")
                    && context.InputParameters["Target"] is EntityReference;

            entityReference = existsAsReference ? (EntityReference)context.InputParameters["Target"] : null;
            return existsAsReference;
        }

        public static bool ContainsTargetAsEntity(this IPluginExecutionContext context,
            out Entity entity)
        {
            var existsAsEntity = context.InputParameters.Contains("Target")
                    && context.InputParameters["Target"] is Entity;

            entity = existsAsEntity ? (Entity)context.InputParameters["Target"] : null;
            return existsAsEntity;
        }
    }
}
