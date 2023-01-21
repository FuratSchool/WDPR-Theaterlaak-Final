using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


public class DatabaseContext : IdentityDbContext<IdentityUser>
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<Stoel>()
        .HasOne(x => x.Rang)
        .WithMany(x => x.Stoelen);

        builder.Entity<Stoel>()
        .HasMany(x => x.Reserveringen)
        .WithMany(x => x.Stoelen)
        .UsingEntity(j => j.ToTable("Ticket"));


    }

    public DbSet<TheaterLaakAPi.Models.Voorstelling> Voorstellingen { get; set; }
    public DbSet<TheaterLaakAPi.Models.Zaal> Zalen { get; set; }
    public DbSet<TheaterLaakAPi.Models.Admin> Admins { get; set; }
    public DbSet<TheaterLaakAPi.Models.ApplicationUser> ApplicationUsers { get; set; }
    public DbSet<TheaterLaakAPi.Models.Artiest> Artiesten { get; set; }
    public DbSet<TheaterLaakAPi.Models.Donateur> Donateurs { get; set; }
    public DbSet<TheaterLaakAPi.Models.Groep> Groepen { get; set; }

    public DbSet<TheaterLaakAPi.Models.Medewerker> Medewerkers { get; set; }
    public DbSet<TheaterLaakAPi.Models.Rang> Rangen { get; set; }
    public DbSet<TheaterLaakAPi.Models.Reservering> Reserveringen { get; set; }
    public DbSet<TheaterLaakAPi.Models.Stoel> Stoelen { get; set; }




}
