namespace Norriq.Registration {
    let formContext: Form.nrq_registration.Main.Information;
    const NOTIFICATION_ID_EVENT_FINISHED: string = 'EventFinished';
    const NOTIFICATION_ID_EVENT_STARTED: string = 'EventStarted';

    export async function onload(executionContext: Xrm.ExecutionContext<any, any>) {
        formContext = <Form.nrq_registration.Main.Information>executionContext.getFormContext();
        if (formContext === null) return;

        setPaymentDateOnCreate();
        onEventFormOpened();
    }

    export function onsave(executionContext: Xrm.ExecutionContext<any, any>) {
        formContext = <Form.nrq_registration.Main.Information>executionContext.getFormContext();
        // showNotificationIfPaymentIsLate();
    }

    async function getRelatedEventData(): Promise<XrmContext.nrq_Event & XrmContext.nrq_Event_FormattedResult | null> {
        const entityRef = formContext.getAttribute("nrq_eventid")?.getValue();
        if (entityRef === null) return null;

        const registrationId = formContext.data.entity.getId();
        return await XrmQuery
            .retrieveRelated(x => x.nrq_registrations, registrationId, x => x.nrq_EventId)
            .includeFormattedValues()
            .promise();
    }

    async function onEventFormOpened() {
        const formType = formContext.ui.getFormType();

        // check form types
        if (formType === Xrm.FormType.Create || formType === Xrm.FormType.QuickCreate) return;

        const eventData = await getRelatedEventData();
        showStartedOrFinishedEventNotification(eventData);
    }

    function setPaymentDateOnCreate() {
        if (formContext.ui.getFormType() === Xrm.FormType.Create) {
            const formAttribute = formContext.getAttribute("nrq_paymentdate");
            formAttribute?.setValue(new Date());
        }
    }

    async function showStartedOrFinishedEventNotification(eventData: XrmContext.nrq_Event & XrmContext.nrq_Event_FormattedResult| null) {
        if (!(eventData?.nrq_date instanceof Date)) return;

        const today = new Date();

        if (eventData.nrq_date.getTime() < dateWithoutTime(today).getTime()) {
            formContext.ui.setFormNotification('Event is already finished', 'INFO', NOTIFICATION_ID_EVENT_FINISHED);
            return;
        }

        if (isSameDay(eventData.nrq_date, today) && dateWithTime(eventData).getTime() < today.getTime()) {
            formContext.ui.setFormNotification('Event has started (is in progress....)', 'INFO', NOTIFICATION_ID_EVENT_STARTED);
        }
    }
    
    function dateWithTime(event: XrmContext.nrq_Event & XrmContext.nrq_Event_FormattedResult) {
        if (!(event.nrq_date instanceof Date)) throw 'Invalid date';
        const result = new Date(event.nrq_date);
        const hour = Number(event.nrq_starttimehour_formatted?.valueOf());
        const mins = Number(event.nrq_starttimeminutes_formatted?.valueOf());
        result.setHours(hour, mins, 0, 0);
        return  result;
    }

    function dateWithoutTime(date: Date){
        const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        result.setHours(0, 0, 0, 0);
        return result;
    }

    function isSameDay(date: Date, other: Date): Boolean {
        return date.getFullYear() === other.getFullYear()
            && date.getMonth() === other.getMonth()
            && date.getDate() === other.getDate();
    }
}