using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class inits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Voorstelling",
                newName: "Titel");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Voorstelling",
                newName: "Beschrijving");

            migrationBuilder.InsertData(
                table: "Zaal",
                columns: new[] { "ZaalId", "Title" },
                values: new object[,]
                {
                    { 1, "x" },
                    { 2, "x" }
                });

            migrationBuilder.InsertData(
                table: "Rangen",
                columns: new[] { "RangId", "Capiciteit", "RangNr", "ZaalId" },
                values: new object[,]
                {
                    { 1, 0, 1, 1 },
                    { 2, 0, 2, 1 },
                    { 3, 0, 3, 1 },
                    { 4, 0, 1, 2 },
                    { 5, 0, 2, 2 }
                });

            migrationBuilder.InsertData(
                table: "Voorstelling",
                columns: new[] { "VoorstellingId", "Beschrijving", "EindDatum", "Prijs", "StartDatum", "Tijd", "Titel", "ZaalId" },
                values: new object[,]
                {
                    { 1, "miauw", new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15.0, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Les Miserables", 1 },
                    { 2, "woef", new DateTime(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15.0, new DateTime(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Matilda the Musical", 1 },
                    { 3, "growl", new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15.0, new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Wicked", 2 }
                });

            migrationBuilder.InsertData(
                table: "Stoelen",
                columns: new[] { "StoelId", "RangId", "StoelNr", "isInvalide" },
                values: new object[,]
                {
                    { 1, 1, 1, 0 },
                    { 2, 1, 2, 0 },
                    { 3, 2, 1, 0 },
                    { 4, 2, 2, 0 },
                    { 5, 3, 1, 0 },
                    { 6, 3, 2, 0 },
                    { 7, 3, 3, 0 },
                    { 8, 3, 4, 0 },
                    { 9, 3, 5, 0 },
                    { 10, 3, 6, 0 },
                    { 11, 3, 7, 0 },
                    { 12, 3, 8, 0 },
                    { 13, 3, 9, 0 },
                    { 14, 3, 10, 0 },
                    { 15, 3, 11, 0 },
                    { 16, 3, 12, 0 },
                    { 17, 3, 13, 0 },
                    { 18, 3, 14, 0 },
                    { 19, 3, 15, 0 },
                    { 20, 3, 16, 0 },
                    { 21, 3, 17, 0 },
                    { 22, 3, 18, 0 },
                    { 23, 3, 19, 0 },
                    { 24, 3, 20, 0 },
                    { 25, 3, 21, 0 },
                    { 26, 3, 22, 0 },
                    { 27, 3, 23, 0 },
                    { 28, 3, 24, 0 },
                    { 29, 3, 25, 0 },
                    { 30, 4, 1, 1 },
                    { 31, 4, 2, 0 },
                    { 32, 5, 1, 0 }
                });

            migrationBuilder.InsertData(
                table: "Reserveringen",
                columns: new[] { "ReserveringId", "ApplicationUserId", "ApplicationUserId1", "ReserveringsDatum", "StoelId", "VoorstellingId", "isBetaald" },
                values: new object[,]
                {
                    { 1, 1, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 1, 1 },
                    { 2, 2, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, 1, 1 },
                    { 3, 3, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, 1, 1 },
                    { 4, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 4, 1, 0 },
                    { 5, 5, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 5, 1, 0 },
                    { 6, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 6, 1, 0 },
                    { 7, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 7, 1, 1 },
                    { 8, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 8, 1, 1 },
                    { 9, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 9, 1, 1 },
                    { 10, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 10, 1, 0 },
                    { 11, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 11, 1, 0 },
                    { 12, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 12, 1, 0 },
                    { 13, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 13, 1, 0 },
                    { 14, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 14, 1, 0 },
                    { 15, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15, 1, 1 },
                    { 16, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 16, 1, 1 },
                    { 17, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 17, 1, 1 },
                    { 18, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 18, 1, 0 },
                    { 19, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 19, 1, 0 },
                    { 20, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 20, 1, 0 },
                    { 21, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 21, 1, 0 },
                    { 22, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 22, 1, 0 },
                    { 23, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 23, 1, 0 },
                    { 24, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 24, 1, 0 },
                    { 25, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 25, 1, 0 },
                    { 26, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 26, 1, 0 },
                    { 27, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 27, 1, 0 },
                    { 28, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 28, 1, 0 },
                    { 29, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 29, 1, 0 },
                    { 30, 2, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 2, 1 },
                    { 31, 3, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, 2, 1 },
                    { 32, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, 2, 0 },
                    { 33, 5, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 4, 2, 1 },
                    { 34, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 5, 2, 1 },
                    { 35, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 6, 2, 0 },
                    { 36, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 7, 2, 0 },
                    { 37, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 8, 2, 0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Voorstelling",
                keyColumn: "VoorstellingId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Rangen",
                keyColumn: "RangId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Rangen",
                keyColumn: "RangId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Stoelen",
                keyColumn: "StoelId",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Voorstelling",
                keyColumn: "VoorstellingId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Voorstelling",
                keyColumn: "VoorstellingId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Rangen",
                keyColumn: "RangId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Rangen",
                keyColumn: "RangId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Rangen",
                keyColumn: "RangId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Zaal",
                keyColumn: "ZaalId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Zaal",
                keyColumn: "ZaalId",
                keyValue: 1);

            migrationBuilder.RenameColumn(
                name: "Titel",
                table: "Voorstelling",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Beschrijving",
                table: "Voorstelling",
                newName: "Description");
        }
    }
}
