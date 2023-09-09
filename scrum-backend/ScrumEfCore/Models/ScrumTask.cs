namespace ScrumEfCore.Models
{
    public class ScrumTask
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public int? LabelId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public int? Status { get; set; }
        public int? StoryPoint { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime? EndTime { get; set; }
        public int? Duration { get; set; }
    }
}
