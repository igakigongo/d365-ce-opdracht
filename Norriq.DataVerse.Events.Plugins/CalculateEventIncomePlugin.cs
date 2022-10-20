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
            switch (context.PrimaryEntityName)
            {
                case "nrq_event":
                    CalculateIncomeForEventTriggers();
                    break;

                case "nrq_registration":
                    CalculateIncomeForRegistrationTriggers(context.MessageName);
                    break;
            }
        }

        private void Init(IOrganizationService service)
        {
            Service = service;
        }

        private void CalculateIncomeForEventTriggers()
        {
            var nrqEvent = _postImage.ToEntity<nrq_Event>();
            UpdateEventIncome(nrqEvent);
        }

        private void CalculateIncomeForRegistrationTriggers(string messageName)
        {
            switch (messageName)
            {
                case MsgCreate:
                case MsgDelete:
                    var sourceEntity = messageName == MsgCreate ? _postImage : _preImage;
                    var registration = sourceEntity.ToEntity<nrq_Registration>();
                    var nrqEvent = nrq_Event.Retrieve(Service, registration.nrq_EventId.Id, x => x.nrq_Price);
                    UpdateEventIncome(nrqEvent);
                    break;

                case MsgUpdate:
                    var prevRegistration = _preImage.ToEntity<nrq_Registration>();
                    var curRegistration = _postImage.ToEntity<nrq_Registration>();

                    var previousEvent = nrq_Event.Retrieve(Service, prevRegistration.nrq_EventId.Id, x => x.nrq_Price);
                    var currentEvent = nrq_Event.Retrieve(Service, curRegistration.nrq_EventId.Id, x => x.nrq_Price);

                    UpdateEventIncome(previousEvent);
                    UpdateEventIncome(currentEvent);
                    break;
            }
        }

        private int GetCountOfActiveRegistrations(Guid eventId)
        {
            var context = new XrmContext.Models.XrmContext(Service);
            var registrations = context.nrq_RegistrationSet
                                       .Where(x => x.nrq_EventId.Id == eventId && x.statecode == nrq_RegistrationState.Active)
                                       .Select(x => 1)
                                       .ToList();

            return registrations.Count;
        }

        private void UpdateEventIncome(nrq_Event nrqEvent)
        {
            if (nrqEvent == null)
                throw new InvalidPluginExecutionException("Event to update is null");

            var countOfActiveRegistrations = GetCountOfActiveRegistrations(nrqEvent.Id);
            nrqEvent.CalculateIncome(countOfActiveRegistrations);
            Service.Update(nrqEvent);
        }
    }
}
