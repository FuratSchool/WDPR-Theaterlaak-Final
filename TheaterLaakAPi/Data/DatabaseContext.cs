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
        builder.Seed();
        builder.Entity<ArtiestGroep>().HasKey(a => new { a.UserId, a.GroepId });
        builder.Entity<IdentityRole>(entity =>
        {
            entity.ToTable(name: "AspNetRoles");
            entity.HasData(new IdentityRole { Name = "Admin", NormalizedName = "Admin".ToUpper() });
            entity.HasData(
                new IdentityRole { Name = "Medewerker", NormalizedName = "Medewerker".ToUpper() }
            );
            entity.HasData(new IdentityRole { Name = "Klant", NormalizedName = "Klant".ToUpper() });
            entity.HasData(
                new IdentityRole { Name = "Donateur", NormalizedName = "Donateur".ToUpper() }
            );
        });
    }

    public DbSet<TheaterLaakAPi.Models.Voorstelling> Voorstelling { get; set; }
    public DbSet<TheaterLaakAPi.Models.Zaal> Zaal { get; set; }
    public DbSet<TheaterLaakAPi.Models.Admin> Admins { get; set; }
    public DbSet<TheaterLaakAPi.Models.ApplicationUser> ApplicationUsers { get; set; }
    public DbSet<TheaterLaakAPi.Models.Artiest> Artiesten { get; set; }
    public DbSet<TheaterLaakAPi.Models.Donateur> Donateurs { get; set; }
    public DbSet<TheaterLaakAPi.Models.Groep> Groepen { get; set; }
    public DbSet<TheaterLaakAPi.Models.ArtiestGroep> ArtiestGroeps { get; set; }

    public DbSet<TheaterLaakAPi.Models.Medewerker> Medewerkers { get; set; }
    public DbSet<TheaterLaakAPi.Models.Rang> Rangen { get; set; }
    public DbSet<Reservering> Reserveringen { get; set; }
    public DbSet<TheaterLaakAPi.Models.Stoel> Stoelen { get; set; }
    public DbSet<Betaling> Betaling { get; set; } = default!;
    public DbSet<Bestelling> Bestelling { get; set; } = default!;
}
