namespace Norriq.Event
{
    let formContext: Form.nrq_event.Main.Information;
    let priceAttribute: Xrm.NumberAttribute;
    const priceTooLowMessage: string = 'The price per person is too low';

    export function onload(executionContext: Xrm.ExecutionContext<any, any>) {
        formContext = <Form.nrq_event.Main.Information>executionContext.getFormContext();
        if (formContext === null) return;

        priceAttribute = formContext.getAttribute("nrq_price");
        priceAttribute?.addOnChange(onPriceChanged);
        onFormLoad();
    }

    function onFormLoad() {
        const formType = formContext.ui.getFormType();
        console.log(`form type: ${formType}`);
        if (formType === Xrm.FormType.Create || formType === Xrm.FormType.QuickCreate)
            return;

        ShowNotificationIfPriceIsTooLow();
    }

    function onPriceChanged() {
        ShowNotificationIfPriceIsTooLow();
    }

    function ShowNotificationIfPriceIsTooLow() {
        const pricePerPerson = priceAttribute?.getValue();
        if (pricePerPerson !== null && pricePerPerson < 50) {
            formContext.ui.setFormNotification(priceTooLowMessage, 'WARNING', '');
        }

        if (pricePerPerson !== null && pricePerPerson >= 50) {
            formContext.ui.clearFormNotification('');
        }
    }
}
