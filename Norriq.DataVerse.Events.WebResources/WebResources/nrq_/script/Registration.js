"use strict";
var Norriq;
(function (Norriq) {
    var Registration;
    (function (Registration) {
        function onload(executionContext) {
            const formContext = executionContext.getFormContext();
            if (formContext.ui.getFormType() === 1 /* Xrm.FormType.Create */) {
                const formAttribute = formContext.getAttribute("nrq_paymentdate");
                formAttribute === null || formAttribute === void 0 ? void 0 : formAttribute.setValue(new Date());
            }
        }
        Registration.onload = onload;
    })(Registration = Norriq.Registration || (Norriq.Registration = {}));
})(Norriq || (Norriq = {}));
