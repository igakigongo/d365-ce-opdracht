namespace Norriq.DataVerse.EventsManager.XrmContext.Models
{
    public partial class nrq_Registration
    {
        public bool IsPaid()
        {
            return nrq_PaymentDate != null;
        }

        public bool WasAttendedByUser()
        {
            return nrq_WasPresent.GetValueOrDefault();
        }
    }
}
