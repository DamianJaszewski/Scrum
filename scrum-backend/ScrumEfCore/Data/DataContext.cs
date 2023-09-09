using Microsoft.EntityFrameworkCore;
using ScrumEfCore.Models;

namespace ScrumEfCore.Data
{
    public class DataContext : DbContext
    {
        public static readonly ILoggerFactory factory
            = LoggerFactory.Create(builder => { builder.AddConsole(); });

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Status> Status { get; set; }
        public DbSet<ScrumTask> ScrumTask { get; set; }
        public DbSet<Team> Team { get; set; }
        public DbSet<User> User { get; set; }


    }
}
