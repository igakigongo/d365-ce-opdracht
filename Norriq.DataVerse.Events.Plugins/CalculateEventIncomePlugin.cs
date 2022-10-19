using System;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Norriq.DataVerse.Events.XrmContext.Models;
using Norriq.DataVerse.Plugins.BaseLayer;
using Norriq.DataVerse.Plugins.BaseLayer.Telemetry;

namespace Norriq.DataVerse.Events.Plugins
{
    public class CalculateEventIncomePlugin : BasePlugin
    {

        private IOrganizationService Service { get; set; }

        protected override void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            Init(service);
            nrq_Event currentEvent, previousEvent;
            nrq_Registration currentRegistration, previousRegistration;

            switch (context.PrimaryEntityName)
            {
                case "nrq_event":
                    OnEventPriceChangedRecalculateForecastIncome(_postImage.Id);
                    break;

                default:
                    break;
            }

            return;

            switch (context.MessageName)
            {
                case MsgCreate:
                    currentRegistration = _target.ToEntity<nrq_Registration>();
                    // currentEvent = GetEvent(service, currentRegistration.nrq_EventId.Id);
                    currentEvent.IncrementIncome();
                    service.Update(currentEvent);
                    break;

                case MsgDelete:
                    currentRegistration = _preImage.ToEntity<nrq_Registration>();
                    currentRegistration.ThrowIfCannotBeDeleted();
                    // currentEvent = GetEvent(service, currentRegistration.nrq_EventId.Id);
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
                    //currentEvent = GetEvent(service, currentRegistration.nrq_EventId.Id);
                    // previousEvent = GetEvent(service, previousRegistration.nrq_EventId.Id);

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

        private nrq_Event GetEvent(Guid id)
        {
            return nrq_Event.Retrieve(Service, id, x => x.nrq_Price);
        }

        private void Init(IOrganizationService service)
        {
            Service = service;
        }

        private void OnEventPriceChangedRecalculateForecastIncome(Guid eventId)
        {
            var context = new XrmContext.Models.XrmContext(Service);
            var nrqEvent = GetEvent(eventId);
            if (nrqEvent != null)
            {
                var registrations = context.nrq_RegistrationSet
                    .Where(x => x.nrq_EventId.Id == eventId && x.statecode == nrq_RegistrationState.Active)
                    .Select(x => 1)
                    .ToList();

                nrqEvent.CalculateIncome(registrations.Count);
                Service.Update(nrqEvent);
            }
        }
    }
}
