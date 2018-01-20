
using Grimoire.Models;
using Microsoft.EntityFrameworkCore;

namespace Grimoire
{
    public class GrimoireContext : DbContext
    {
        public GrimoireContext(DbContextOptions<GrimoireContext> options): base(options) {}
        public DbSet<Character> Characters { get; set; }
    }
}