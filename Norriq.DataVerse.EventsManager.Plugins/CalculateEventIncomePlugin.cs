using System;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Norriq.DataVerse.EventsManager.XrmContext.Models;
using Norriq.DataVerse.Plugins.BaseLayer;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.EventsManager.Plugins
{
    public class CalculateEventIncomePlugin : BasePlugin
    {
        private readonly string _logicalName = "nrq_registration";

        protected override void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            nrq_Event currentEvent, previousEvent;
            nrq_Registration currentRegistration, previousRegistration;

            switch (context.MessageName)
            {
                case MsgCreate:
                    currentRegistration = _target.ToEntity<nrq_Registration>();
                    currentEvent = nrq_Event.Retrieve(service, currentRegistration.nrq_EventId.Id, x => x.nrq_Income, x => x.nrq_Price);
                    currentEvent.nrq_Income = currentEvent.nrq_Income.GetValueOrDefault() + currentEvent.nrq_Price.GetValueOrDefault();
                    service.Update(currentEvent);
                    break;

                case MsgDelete:
                    currentRegistration = _preImage.ToEntity<nrq_Registration>();

                    if (currentRegistration.IsPaid())
                        throw new InvalidPluginExecutionException("Paid registrations can not be removed");  

                    if (currentRegistration.WasAttendedByUser())
                        throw new InvalidPluginExecutionException("Cannot delete a Registration for a user who has already attended the event");

                    currentEvent = nrq_Event.Retrieve(service, currentRegistration.nrq_EventId.Id, x => x.nrq_Income);
                    if (CanApplyUpdateOnDelete(currentEvent, currentRegistration))
                    {
                        currentEvent.nrq_Income = currentEvent.nrq_Income.GetValueOrDefault() - currentRegistration.nrq_Price.GetValueOrDefault();
                        service.Update(currentEvent);
                    } 
                    break;

                case MsgUpdate:
                    //previousRegistration = _preImage.ToEntity<nrq_Registration>();  
                    //currentRegistration = _target.ToEntity<nrq_Registration>();
                    //if (currentRegistration.nrq_EventId == previousRegistration.nrq_EventId)
                    //{
                    //    currentEvent = nrq_Event.Retrieve(service, currentRegistration.nrq_EventId.Id, x => new { x.nrq_Income, x.nrq_Price });
                    //    currentEvent.nrq_Income += (currentRegistration.nrq_Price - previousRegistration.nrq_Price);
                    //    service.Update(currentEvent);
                    //} else
                    //{
                    //    currentEvent = nrq_Event.Retrieve(service, currentRegistration.nrq_EventId.Id, x => new { x.nrq_Income, x.nrq_Price });
                    //    previousEvent = nrq_Event.Retrieve(service, previousRegistration.nrq_EventId.Id, x => new { x.nrq_Income, x.nrq_Price });
                    //    currentEvent.nrq_Income += currentRegistration.nrq_Price;
                    //    previousEvent.nrq_Income -= previousRegistration.nrq_Price;
                    //    service.Update(currentEvent);
                    //    service.Update(previousEvent);
                    //}
                    break;
            }
        }

        public bool CanApplyUpdateOnDelete(nrq_Event nrqEvent, nrq_Registration nrqRegistration)
        {
            return nrqEvent.nrq_Income.GetValueOrDefault() > 0 &&
                nrqRegistration.nrq_Price.GetValueOrDefault() <= nrqEvent.nrq_Income.GetValueOrDefault();
        }
    }
}
