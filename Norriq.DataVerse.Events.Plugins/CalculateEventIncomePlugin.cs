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

        private IPluginExecutionContext Context { get; set; }
        private IOrganizationService Service { get; set; }
        private AppInsightsTracingService AppInsightsTracingService { get; set; }

        protected override void Execute(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            Init(context, service,tracingService);
            CalculateIncomeForEventTriggers();
            CalculateIncomeForRegistrationTriggers();
        }

        private void Init(IPluginExecutionContext context, IOrganizationService service, AppInsightsTracingService tracingService)
        {
            Context = context;
            Service = service;
            AppInsightsTracingService = tracingService;
        }

        private void CalculateIncomeForEventTriggers()
        {
            if (!string.Equals(Context.PrimaryEntityName, "nrq_event", StringComparison.OrdinalIgnoreCase))
                return;

            switch (Context.MessageName)
            {
                case MsgUpdate:
                    AppInsightsTracingService.LogTrace($"{nameof(CalculateEventIncomePlugin)} - {nameof(CalculateIncomeForEventTriggers)}: {DateTime.Now:f}");
                    var nrqEvent = _postImage.ToEntity<nrq_Event>();
                    AppInsightsTracingService.LogTrace(nrqEvent.GetFormattedPriceAndIncomeTraceMessage());
                    UpdateEventIncome(nrqEvent);
                    AppInsightsTracingService.LogTrace(nrqEvent.GetFormattedPriceAndIncomeTraceMessage());
                    break;
            }
        }

        private void CalculateIncomeForRegistrationTriggers()
        {
            if (!string.Equals(Context.PrimaryEntityName, "nrq_registration", StringComparison.OrdinalIgnoreCase))
                return;

            switch (Context.MessageName)
            {
                case MsgCreate:
                case MsgDelete:
                    var sourceEntity = Context.MessageName == MsgCreate ? _postImage : _preImage;
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
            Service.Update(nrqEvent.GetIncomeUpdateEntity());
        }
    }
}
