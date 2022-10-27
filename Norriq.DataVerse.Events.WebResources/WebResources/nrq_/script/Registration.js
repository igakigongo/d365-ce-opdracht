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
        const NOTIFICATION_ID_EVENT_FINISHED = 'EventFinished';
        const NOTIFICATION_ID_EVENT_STARTED = 'EventStarted';
        function onload(executionContext) {
            return __awaiter(this, void 0, void 0, function* () {
                formContext = executionContext.getFormContext();
                if (formContext === null)
                    return;
                setPaymentDateOnCreate();
                onEventFormOpened();
            });
        }
        Registration.onload = onload;
        function onsave(executionContext) {
            formContext = executionContext.getFormContext();
            // showNotificationIfPaymentIsLate();
        }
        Registration.onsave = onsave;
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
                // check form types
                if (formType === 1 /* Xrm.FormType.Create */ || formType === 5 /* Xrm.FormType.QuickCreate */)
                    return;
                const eventData = yield getRelatedEventData();
                showStartedOrFinishedEventNotification(eventData);
            });
        }
        function setPaymentDateOnCreate() {
            if (formContext.ui.getFormType() === 1 /* Xrm.FormType.Create */) {
                const formAttribute = formContext.getAttribute("nrq_paymentdate");
                formAttribute === null || formAttribute === void 0 ? void 0 : formAttribute.setValue(new Date());
            }
        }
        function showStartedOrFinishedEventNotification(eventData) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!((eventData === null || eventData === void 0 ? void 0 : eventData.nrq_date) instanceof Date))
                    return;
                const today = new Date();
                if (eventData.nrq_date.getTime() < dateWithoutTime(today).getTime()) {
                    formContext.ui.setFormNotification('Event is already finished', 'INFO', NOTIFICATION_ID_EVENT_FINISHED);
                    return;
                }
                if (isSameDay(eventData.nrq_date, today) && dateWithTime(eventData).getTime() < today.getTime()) {
                    formContext.ui.setFormNotification('Event has started (is in progress....)', 'INFO', NOTIFICATION_ID_EVENT_STARTED);
                }
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
