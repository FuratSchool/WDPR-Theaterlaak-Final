using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

public static class ModelBuilderExtensions
{
    public static void Seed(this ModelBuilder builder)
    {
        builder
            .Entity<Zaal>()
            .HasData(
                new Zaal { Title = "Zaal1", ZaalId = 1 },
                new Zaal { Title = "Zaal2", ZaalId = 2 }
            );

        builder
            .Entity<Voorstelling>()
            .HasData(
                new Voorstelling
                {
                    VoorstellingId = 1,
                    Title = "kat",
                    Tijd = new DateTime(2023, 1, 1),
                    Description = "miauw",
                    Prijs = 15.00,
                    StartDatum = new DateTime(2023, 1, 1),
                    EindDatum = new DateTime(2023, 1, 1),
                    ZaalId = 1
                },
                new Voorstelling
                {
                    VoorstellingId = 2,
                    Title = "hond",
                    Tijd = new DateTime(2023, 2, 1),
                    Description = "woef",
                    Prijs = 15.00,
                    StartDatum = new DateTime(2023, 2, 1),
                    EindDatum = new DateTime(2023, 2, 1),
                    ZaalId = 1
                },
                new Voorstelling
                {
                    VoorstellingId = 3,
                    Title = "luipaard",
                    Tijd = new DateTime(2023, 3, 1),
                    Description = "growl",
                    Prijs = 15.00,
                    StartDatum = new DateTime(2023, 3, 1),
                    EindDatum = new DateTime(2023, 3, 1),
                    ZaalId = 2
                }
            );

        builder
            .Entity<Rang>()
            .HasData(
                new Rang
                {
                    RangId = 1,
                    RangNr = 1,
                    ZaalId = 1
                },
                new Rang
                {
                    RangId = 2,
                    RangNr = 2,
                    ZaalId = 1
                },
                new Rang
                {
                    RangId = 3,
                    RangNr = 3,
                    ZaalId = 1
                },
                new Rang
                {
                    RangId = 4,
                    RangNr = 1,
                    ZaalId = 2
                },
                new Rang
                {
                    RangId = 5,
                    RangNr = 2,
                    ZaalId = 2
                }
            );

        builder
            .Entity<Stoel>()
            .HasData(
                new Stoel
                {
                    StoelId = 1,
                    StoelNr = 1,
                    isInvalide = 0,
                    RangId = 1
                },
                new Stoel
                {
                    StoelId = 2,
                    StoelNr = 2,
                    isInvalide = 0,
                    RangId = 1
                },
                new Stoel
                {
                    StoelId = 3,
                    StoelNr = 1,
                    isInvalide = 0,
                    RangId = 2
                },
                new Stoel
                {
                    StoelId = 4,
                    StoelNr = 2,
                    isInvalide = 0,
                    RangId = 2
                },
                new Stoel
                {
                    StoelId = 5,
                    StoelNr = 1,
                    isInvalide = 0,
                    RangId = 3
                },
                new Stoel
                {
                    StoelId = 7,
                    StoelNr = 1,
                    isInvalide = 1,
                    RangId = 4
                },
                new Stoel
                {
                    StoelId = 8,
                    StoelNr = 2,
                    isInvalide = 0,
                    RangId = 4
                },
                new Stoel
                {
                    StoelId = 9,
                    StoelNr = 1,
                    isInvalide = 0,
                    RangId = 5
                }
            );

        builder
            .Entity<Reservering>()
            .HasData(
                new
                {
                    ReserveringId = 1,
                    ReserveringsDatum = new DateTime(2023, 1, 1),
                    isBetaald = 0,
                    ApplicationUserId = 1,
                    VoorstellingId = 1,
                    StoelId = 1
                },
                new
                {
                    ReserveringId = 2,
                    ReserveringsDatum = new DateTime(2023, 1, 1),
                    isBetaald = 0,
                    ApplicationUserId = 2,
                    VoorstellingId = 1,
                    StoelId = 2
                },
                new
                {
                    ReserveringId = 3,
                    ReserveringsDatum = new DateTime(2023, 1, 1),
                    isBetaald = 1,
                    ApplicationUserId = 3,
                    VoorstellingId = 1,
                    StoelId = 3
                },
                new
                {
                    ReserveringId = 4,
                    ReserveringsDatum = new DateTime(2023, 1, 1),
                    isBetaald = 0,
                    ApplicationUserId = 4,
                    VoorstellingId = 2,
                    StoelId = 1
                },
                new
                {
                    ReserveringId = 5,
                    ReserveringsDatum = new DateTime(2023, 1, 1),
                    isBetaald = 1,
                    ApplicationUserId = 5,
                    VoorstellingId = 2,
                    StoelId = 2
                }
            );
    }
}
