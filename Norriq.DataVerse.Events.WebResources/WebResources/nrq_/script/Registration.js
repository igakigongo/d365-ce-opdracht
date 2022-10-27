"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Norriq;
(function (Norriq) {
    var Registration;
    (function (Registration) {
        let formContext;
        let paymentDateAttribute;
        const NOTIFICATION_ID_EVENT_FINISHED = 'EventFinished';
        const NOTIFICATION_ID_EVENT_STARTED = 'EventStarted';
        const NOTIFICATION_ID_PAYMENT_LATE = 'PaymentLate';
        function onload(executionContext) {
            return __awaiter(this, void 0, void 0, function* () {
                formContext = executionContext.getFormContext();
                if (formContext === null)
                    return;
                paymentDateAttribute = formContext.getAttribute("nrq_paymentdate");
                paymentDateAttribute.addOnChange(showNotificationIfPaymentIsLate);
                setPaymentDateOnCreate();
                addOnSaveEventHandler();
                yield onEventFormOpened();
            });
        }
        Registration.onload = onload;
        /**
         * this might not be necessary since the OnChangeEvent is active on the payment_date field
         * just leave it here - to remember that you can run some code - post save (success/error handlers)
         */
        function addOnSaveEventHandler() {
            formContext.data.entity.addOnPostSave(function (context) {
                return __awaiter(this, void 0, void 0, function* () {
                    const eventArgs = context === null || context === void 0 ? void 0 : context.getEventArgs();
                    if (eventArgs === null || eventArgs === void 0 ? void 0 : eventArgs.getIsSaveSuccess()) {
                        yield showNotificationIfPaymentIsLate();
                    }
                });
            });
        }
        function getRelatedEventData() {
            var _a;
            return __awaiter(this, void 0, void 0, function* () {
                const entityRef = (_a = formContext.getAttribute("nrq_eventid")) === null || _a === void 0 ? void 0 : _a.getValue();
                if (entityRef === null)
                    return null;
                const registrationId = formContext.data.entity.getId();
                return yield XrmQuery
                    .retrieveRelated(x => x.nrq_registrations, registrationId, x => x.nrq_EventId)
                    .includeFormattedValues()
                    .promise();
            });
        }
        function onEventFormOpened() {
            return __awaiter(this, void 0, void 0, function* () {
                const formType = formContext.ui.getFormType();
                if (formType === 1 /* Xrm.FormType.Create */ || formType === 5 /* Xrm.FormType.QuickCreate */)
                    return;
                showNotificationIfEventStartedOrFinished();
                showNotificationIfPaymentIsLate();
            });
        }
        function setPaymentDateOnCreate() {
            if (formContext.ui.getFormType() === 1 /* Xrm.FormType.Create */) {
                paymentDateAttribute === null || paymentDateAttribute === void 0 ? void 0 : paymentDateAttribute.setValue(new Date());
            }
        }
        function showNotificationIfEventStartedOrFinished() {
            return __awaiter(this, void 0, void 0, function* () {
                const event = yield getRelatedEventData();
                if (!((event === null || event === void 0 ? void 0 : event.nrq_date) instanceof Date))
                    return;
                const today = new Date();
                if (event.nrq_date.getTime() < dateWithoutTime(today).getTime()) {
                    formContext.ui.setFormNotification('Event is already finished', 'INFO', NOTIFICATION_ID_EVENT_FINISHED);
                    return;
                }
                if (isSameDay(event.nrq_date, today) && dateWithTime(event).getTime() < today.getTime()) {
                    formContext.ui.setFormNotification('Event has started (is in progress....)', 'INFO', NOTIFICATION_ID_EVENT_STARTED);
                }
            });
        }
        function showNotificationIfPaymentIsLate() {
            return __awaiter(this, void 0, void 0, function* () {
                const paymentDate = paymentDateAttribute.getValue();
                if (paymentDate === null)
                    return;
                const event = yield getRelatedEventData();
                if (!((event === null || event === void 0 ? void 0 : event.nrq_date) instanceof Date))
                    return;
                if (paymentDate.getTime() > event.nrq_date.getTime())
                    formContext.ui.setFormNotification('Payment is late', 'WARNING', NOTIFICATION_ID_PAYMENT_LATE);
                else
                    formContext.ui.clearFormNotification(NOTIFICATION_ID_PAYMENT_LATE);
            });
        }
        function dateWithTime(event) {
            var _a, _b;
            if (!(event.nrq_date instanceof Date))
                throw 'Invalid date';
            const result = new Date(event.nrq_date);
            const hour = Number((_a = event.nrq_starttimehour_formatted) === null || _a === void 0 ? void 0 : _a.valueOf());
            const mins = Number((_b = event.nrq_starttimeminutes_formatted) === null || _b === void 0 ? void 0 : _b.valueOf());
            result.setHours(hour, mins, 0, 0);
            return result;
        }
        function dateWithoutTime(date) {
            const result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            result.setHours(0, 0, 0, 0);
            return result;
        }
        function isSameDay(date, other) {
            return date.getFullYear() === other.getFullYear()
                && date.getMonth() === other.getMonth()
                && date.getDate() === other.getDate();
        }
    })(Registration = Norriq.Registration || (Norriq.Registration = {}));
})(Norriq || (Norriq = {}));
