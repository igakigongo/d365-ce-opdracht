using Microsoft.Xrm.Sdk;

namespace Norriq.DataVerse.Events.XrmContext.Models
{
    public partial class nrq_Registration
    {
        public void ThrowIfCannotBeDeleted()
        {
            if (nrq_WasPresent.GetValueOrDefault())
                throw new InvalidPluginExecutionException("Cannot delete a Registration for a user who has already attended the event");

            if (nrq_PaymentDate.HasValue)
                throw new InvalidPluginExecutionException("Paid registrations can not be removed");
        }
    }
}
