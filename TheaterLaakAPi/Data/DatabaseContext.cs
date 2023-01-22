using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

public class DatabaseContext : IdentityDbContext<ApplicationUser>
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
    }

    public DbSet<TheaterLaakAPi.Models.Voorstelling> Voorstelling { get; set; } = default!;
    public DbSet<TheaterLaakAPi.Models.Zaal> Zaal { get; set; } = default!;
    public DbSet<TheaterLaakAPi.Models.Rang> Rang { get; set; } = default!;
    public DbSet<TheaterLaakAPi.Models.Stoel> Stoel { get; set; } = default!;
}
