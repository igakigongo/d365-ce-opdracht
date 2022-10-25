"use strict";
var Norriq;
(function (Norriq) {
    var Event;
    (function (Event) {
        let formContext;
        let priceAttribute;
        const priceTooLowMessage = 'The price per person is too low';
        function onload(executionContext) {
            formContext = executionContext.getFormContext();
            if (formContext === null)
                return;
            priceAttribute = formContext.getAttribute("nrq_price");
            priceAttribute === null || priceAttribute === void 0 ? void 0 : priceAttribute.addOnChange(onPriceChanged);
            onFormLoad();
        }
        Event.onload = onload;
        function onFormLoad() {
            const formType = formContext.ui.getFormType();
            console.log(`form type: ${formType}`);
            if (formType === 1 /* Xrm.FormType.Create */ || formType === 5 /* Xrm.FormType.QuickCreate */)
                return;
            ShowNotificationIfPriceIsTooLow();
        }
        function onPriceChanged() {
            ShowNotificationIfPriceIsTooLow();
        }
        function ShowNotificationIfPriceIsTooLow() {
            const pricePerPerson = priceAttribute === null || priceAttribute === void 0 ? void 0 : priceAttribute.getValue();
            if (pricePerPerson !== null && pricePerPerson < 50) {
                formContext.ui.setFormNotification(priceTooLowMessage, 'WARNING', '');
            }
            if (pricePerPerson !== null && pricePerPerson >= 50) {
                formContext.ui.clearFormNotification('');
            }
        }
    })(Event = Norriq.Event || (Norriq.Event = {}));
})(Norriq || (Norriq = {}));
