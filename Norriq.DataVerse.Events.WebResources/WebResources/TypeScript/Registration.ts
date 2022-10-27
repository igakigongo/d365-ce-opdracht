namespace Norriq.Registration {
    let formContext: Form.nrq_registration.Main.Information;
    let paymentDateAttribute: Xrm.DateAttribute;
    const NOTIFICATION_ID_EVENT_FINISHED = 'EventFinished';
    const NOTIFICATION_ID_EVENT_STARTED = 'EventStarted';
    const NOTIFICATION_ID_PAYMENT_LATE = 'PaymentLate';

    export async function onload(executionContext: Xrm.ExecutionContext<any, any>) {
        formContext = <Form.nrq_registration.Main.Information>executionContext.getFormContext();
        if (formContext === null) return;

        paymentDateAttribute = formContext.getAttribute("nrq_paymentdate");
        paymentDateAttribute.addOnChange(showNotificationIfPaymentIsLate);
        setPaymentDateOnCreate();
        addOnSaveEventHandler();
        await onEventFormOpened();
    }

    /**
     * this might not be necessary since the OnChangeEvent is active on the payment_date field
     * just leave it here - to remember that you can run some code - post save (success/error handlers)
     */
    function addOnSaveEventHandler(){
        formContext.data.entity.addOnPostSave(async function(context) {
            const eventArgs = context?.getEventArgs();
            if (eventArgs?.getIsSaveSuccess()) {
                await showNotificationIfPaymentIsLate();
            }
        });
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
        if (formType === Xrm.FormType.Create || formType === Xrm.FormType.QuickCreate) return;
        showNotificationIfEventStartedOrFinished();
        showNotificationIfPaymentIsLate();
    }

    function setPaymentDateOnCreate() {
        if (formContext.ui.getFormType() === Xrm.FormType.Create) {
            paymentDateAttribute?.setValue(new Date());
        }
    }

    async function showNotificationIfEventStartedOrFinished() {
        const event = await getRelatedEventData();
        if (!(event?.nrq_date instanceof Date)) return;

        const today = new Date();

        if (event.nrq_date.getTime() < dateWithoutTime(today).getTime()) {
            formContext.ui.setFormNotification('Event is already finished', 'INFO', NOTIFICATION_ID_EVENT_FINISHED);
            return;
        }

        if (isSameDay(event.nrq_date, today) && dateWithTime(event).getTime() < today.getTime()) {
            formContext.ui.setFormNotification('Event has started (is in progress....)', 'INFO', NOTIFICATION_ID_EVENT_STARTED);
        }
    }

    async function showNotificationIfPaymentIsLate() {
        const paymentDate = paymentDateAttribute.getValue();
        if (paymentDate === null) return;
        
        const event = await getRelatedEventData();
        if (!(event?.nrq_date instanceof Date)) return;
        if (paymentDate.getTime() > event.nrq_date.getTime())
            formContext.ui.setFormNotification('Payment is late', 'WARNING', NOTIFICATION_ID_PAYMENT_LATE);
        else 
            formContext.ui.clearFormNotification(NOTIFICATION_ID_PAYMENT_LATE);
    }

    function dateWithTime(event: XrmContext.nrq_Event & XrmContext.nrq_Event_FormattedResult) {
        if (!(event.nrq_date instanceof Date)) throw 'Invalid date';
        const result = new Date(event.nrq_date);
        const hour = Number(event.nrq_starttimehour_formatted?.valueOf());
        const mins = Number(event.nrq_starttimeminutes_formatted?.valueOf());
        result.setHours(hour, mins, 0, 0);
        return result;
    }

    function dateWithoutTime(date: Date) {
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