using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class vadd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Voorstelling",
                columns: new[] { "VoorstellingId", "Beschrijving", "EindDatum", "Prijs", "StartDatum", "Tijd", "Titel", "ZaalId" },
                values: new object[] { 4, "xo", new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15.0, new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Mama", 1 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Voorstelling",
                keyColumn: "VoorstellingId",
                keyValue: 4);
        }
    }
}
