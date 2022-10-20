namespace Norriq.DataVerse.Events.XrmContext.Models
{
    public partial class nrq_Event
    {
        public void CalculateIncome(int countOfRegistrations)
        {
            nrq_Income = nrq_Price.GetValueOrDefault() * countOfRegistrations;
        }

        public string GetFormattedPriceAndIncomeTraceMessage()
        {
            return string
            .Format("{0}: Price => {1}, Income => {2}", nameof(nrq_Event), nrq_Price, nrq_Income);
        }

        public nrq_Event GetIncomeUpdateEntity() => new nrq_Event(Id)
        {
            nrq_Income = nrq_Income
        };
    }
}
