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

        builder.Entity<Zaal>().HasData(
            new Zaal { ZaalId = 1, Title="x" },
            new Zaal { ZaalId = 2, Title="x"});

        builder.Entity<Voorstelling>().HasData(
            new Voorstelling { VoorstellingId = 1, Titel = "Les Miserables", Tijd = new DateTime(2023, 1, 1), Beschrijving = "miauw", Prijs = 15.00, StartDatum = new DateTime(2023, 1, 1), EindDatum = new DateTime(2023, 1, 1), ZaalId = 1 },
            new Voorstelling { VoorstellingId = 2, Titel = "Matilda the Musical", Tijd = new DateTime(2023, 2, 1), Beschrijving = "woef", Prijs = 15.00, StartDatum = new DateTime(2023, 2, 1), EindDatum = new DateTime(2023, 2, 1), ZaalId = 1 },
            new Voorstelling { VoorstellingId = 3, Titel = "Wicked", Tijd = new DateTime(2023, 3, 1), Beschrijving = "growl", Prijs = 15.00, StartDatum = new DateTime(2023, 3, 1), EindDatum = new DateTime(2023, 3, 1), ZaalId = 2 }
        );

        builder.Entity<Rang>().HasData(
            new Rang { RangId = 1, RangNr = 1, ZaalId = 1 },
            new Rang { RangId = 2, RangNr = 2, ZaalId = 1 },
            new Rang { RangId = 3, RangNr = 3, ZaalId = 1 },

            new Rang { RangId = 4, RangNr = 1, ZaalId = 2 },
            new Rang { RangId = 5, RangNr = 2, ZaalId = 2 }
        );

        builder.Entity<Stoel>().HasData(
            new Stoel { StoelId = 1, StoelNr = 1, isInvalide = 0, RangId = 1 },
            new Stoel { StoelId = 2, StoelNr = 2, isInvalide = 0, RangId = 1 },

            new Stoel { StoelId = 3, StoelNr = 1, isInvalide = 0, RangId = 2 },
            new Stoel { StoelId = 4, StoelNr = 2, isInvalide = 0, RangId = 2 },

            new Stoel { StoelId = 5, StoelNr = 1, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 6, StoelNr = 2, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 7, StoelNr = 3, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 8, StoelNr = 4, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 9, StoelNr = 5, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 10, StoelNr = 6, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 11, StoelNr = 7, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 12, StoelNr = 8, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 13, StoelNr = 9, isInvalide = 0, RangId = 3 },

            new Stoel { StoelId = 14, StoelNr = 10, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 15, StoelNr = 11, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 16, StoelNr = 12, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 17, StoelNr = 13, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 18, StoelNr = 14, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 19, StoelNr = 15, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 20, StoelNr = 16, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 21, StoelNr = 17, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 22, StoelNr = 18, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 23, StoelNr = 19, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 24, StoelNr = 20, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 25, StoelNr = 21, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 26, StoelNr = 22, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 27, StoelNr = 23, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 28, StoelNr = 24, isInvalide = 0, RangId = 3 },
            new Stoel { StoelId = 29, StoelNr = 25, isInvalide = 0, RangId = 3 },



            new Stoel { StoelId = 30, StoelNr = 1, isInvalide = 1, RangId = 4 },
            new Stoel { StoelId = 31, StoelNr = 2, isInvalide = 0, RangId = 4 },

            new Stoel { StoelId = 32, StoelNr = 1, isInvalide = 0, RangId = 5 }

            //extra seed

        );

        builder.Entity<Reservering>().HasData(
        new { ReserveringId = 1, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 1, VoorstellingId = 1, StoelId = 1 },
        new { ReserveringId = 2, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 2, VoorstellingId = 1, StoelId = 2 },
        new { ReserveringId = 3, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 3, VoorstellingId = 1, StoelId = 3 },
        new { ReserveringId = 4, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 4 },
        new { ReserveringId = 5, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 5, VoorstellingId = 1, StoelId = 5 },
        new { ReserveringId = 6, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 6 },
        new { ReserveringId = 7, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 7 },
        new { ReserveringId = 8, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 8 },
        new { ReserveringId = 9, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 9 },
        new { ReserveringId = 10, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 10 },
        new { ReserveringId = 11, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 11 },
        new { ReserveringId = 12, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 12 },
        new { ReserveringId = 13, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 13 },
        new { ReserveringId = 14, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 14 },
        new { ReserveringId = 15, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 15 },
        new { ReserveringId = 16, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 16 },
        new { ReserveringId = 17, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 17 },
        new { ReserveringId = 18, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 18 },
        new { ReserveringId = 19, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 19 },
        new { ReserveringId = 20, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 20 },
        new { ReserveringId = 21, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 21 },
        new { ReserveringId = 22, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 22 },
        new { ReserveringId = 23, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 23 },
        new { ReserveringId = 24, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 24 },
        new { ReserveringId = 25, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 25 },
        new { ReserveringId = 26, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 26 },
        new { ReserveringId = 27, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 27 },
        new { ReserveringId = 28, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 28 },
        new { ReserveringId = 29, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 1, StoelId = 29 },

        new { ReserveringId = 30, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 2, VoorstellingId = 2, StoelId = 1 },
        new { ReserveringId = 31, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 3, VoorstellingId = 2, StoelId = 2 },
        new { ReserveringId = 32, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 2, StoelId = 3 },
        new { ReserveringId = 33, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 5, VoorstellingId = 2, StoelId = 4 },
        new { ReserveringId = 34, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 1, ApplicationUserId = 4, VoorstellingId = 2, StoelId = 5 },
        new { ReserveringId = 35, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 2, StoelId = 6 },
        new { ReserveringId = 36, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 2, StoelId = 7 },
        new { ReserveringId = 37, ReserveringsDatum = new DateTime(2023, 1, 1), isBetaald = 0, ApplicationUserId = 4, VoorstellingId = 2, StoelId = 8 }

        );







    }

}
