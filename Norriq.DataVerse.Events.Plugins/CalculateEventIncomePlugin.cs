using System;
using Microsoft.Xrm.Sdk;
using Norriq.DataVerse.Events.XrmContext.Models;
using Norriq.DataVerse.Plugins.BaseLayer;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.Events.Plugins
{
    public class CalculateEventIncomePlugin : BasePlugin
    {
        protected override void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            nrq_Event currentEvent, previousEvent;
            nrq_Registration currentRegistration, previousRegistration;

            switch (context.MessageName)
            {
                case MsgCreate:
                    currentRegistration = _target.ToEntity<nrq_Registration>();
                    currentEvent = GetEvent(service, currentRegistration.nrq_EventId.Id);
                    currentEvent.IncrementIncome();
                    service.Update(currentEvent);
                    break;

                case MsgDelete:
                    currentRegistration = _preImage.ToEntity<nrq_Registration>();
                    currentRegistration.ThrowIfCannotBeDeleted();
                    currentEvent = GetEvent(service, currentRegistration.nrq_EventId.Id);
                    if (currentEvent.CanApplyUpdateOnDelete(currentRegistration))
                    {
                        currentEvent.DecrementIncome(currentRegistration);
                        service.Update(currentEvent);
                    }
                    break;

                case MsgUpdate:
                    // get registrations
                    previousRegistration = _preImage.ToEntity<nrq_Registration>();
                    currentRegistration = _target.ToEntity<nrq_Registration>();
                    
                    // get events
                    currentEvent = GetEvent(service, currentRegistration.nrq_EventId.Id);
                    previousEvent = GetEvent(service, previousRegistration.nrq_EventId.Id);

                    // update income in events
                    currentEvent.IncrementIncome();
                    currentEvent.DecrementIncome(previousRegistration);
                    previousEvent.DecrementIncome(previousRegistration);

                    // call service update
                    service.Update(previousEvent);
                    service.Update(currentEvent);
                    break;
            }
        }

        private nrq_Event GetEvent(IOrganizationService service, Guid id)
        {
            return nrq_Event.Retrieve(service, id, x => x.nrq_Income, x => x.nrq_Price);
        }
    }
}
