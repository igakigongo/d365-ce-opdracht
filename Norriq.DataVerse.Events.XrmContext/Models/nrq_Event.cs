namespace Norriq.DataVerse.Events.XrmContext.Models
{
    public partial class nrq_Event
    {
        public bool CanApplyUpdateOnDelete(nrq_Registration deletedRegistration)
        {
            return nrq_Income.GetValueOrDefault() > 0 &&
                deletedRegistration.nrq_Price.GetValueOrDefault() <= nrq_Income.GetValueOrDefault();
        }

        public void DecrementIncome(nrq_Registration registration)
        {
            nrq_Income = nrq_Income.GetValueOrDefault() - registration.nrq_Price.GetValueOrDefault();   
        }

        public void IncrementIncome()
        {
            nrq_Income = nrq_Income.GetValueOrDefault() + nrq_Price.GetValueOrDefault();
        }
    }
}
