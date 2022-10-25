namespace Norriq.Registration {
    export function onload(executionContext: Xrm.ExecutionContext<any, any>){
        const formContext = <Form.nrq_registration.Main.Information> executionContext.getFormContext();
        if (formContext.ui.getFormType() === Xrm.FormType.Create) {
            const formAttribute = formContext.getAttribute("nrq_paymentdate");
            formAttribute?.setValue(new Date());
        }
    }
}