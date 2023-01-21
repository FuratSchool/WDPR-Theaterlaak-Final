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

    public DbSet<TheaterLaakAPi.Models.Voorstelling> Voorstelling { get; set; }
    public DbSet<TheaterLaakAPi.Models.Zaal> Zaal { get; set; }
    public DbSet<TheaterLaakAPi.Models.Stoel>Stoel { get; set; }
    public DbSet<TheaterLaakAPi.Models.Rang> Rang { get; set; }

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


        builder.Seed();

    }



}
