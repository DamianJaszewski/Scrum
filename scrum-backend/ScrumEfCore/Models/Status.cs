namespace ScrumEfCore.Models
{
    public class Status
    {
        public int Id { get; set; }
        public int TaskId { get; set; }
        public string? Name { get; set; }
        public DateTime DateTime { get; set; }
    }
}
