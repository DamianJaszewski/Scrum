namespace ScrumEfCore.Models
{
    public class Team
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int UserId { get; set; }
        public int TaskId { get; set; }
        public string? Title { get; set; }
    }
}
