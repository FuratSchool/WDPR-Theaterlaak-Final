using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class aoxakxaa : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reserveringen_Stoelen_StoelId",
                table: "Reserveringen");

            migrationBuilder.DropForeignKey(
                name: "FK_Reserveringen_Voorstelling_VoorstellingId",
                table: "Reserveringen");

            migrationBuilder.AlterColumn<int>(
                name: "isBetaald",
                table: "Reserveringen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "VoorstellingId",
                table: "Reserveringen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "StoelId",
                table: "Reserveringen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<DateTime>(
                name: "ReserveringsDatum",
                table: "Reserveringen",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Reserveringen_Stoelen_StoelId",
                table: "Reserveringen",
                column: "StoelId",
                principalTable: "Stoelen",
                principalColumn: "StoelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reserveringen_Voorstelling_VoorstellingId",
                table: "Reserveringen",
                column: "VoorstellingId",
                principalTable: "Voorstelling",
                principalColumn: "VoorstellingId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reserveringen_Stoelen_StoelId",
                table: "Reserveringen");

            migrationBuilder.DropForeignKey(
                name: "FK_Reserveringen_Voorstelling_VoorstellingId",
                table: "Reserveringen");

            migrationBuilder.AlterColumn<int>(
                name: "isBetaald",
                table: "Reserveringen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "VoorstellingId",
                table: "Reserveringen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "StoelId",
                table: "Reserveringen",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "ReserveringsDatum",
                table: "Reserveringen",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Reserveringen_Stoelen_StoelId",
                table: "Reserveringen",
                column: "StoelId",
                principalTable: "Stoelen",
                principalColumn: "StoelId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reserveringen_Voorstelling_VoorstellingId",
                table: "Reserveringen",
                column: "VoorstellingId",
                principalTable: "Voorstelling",
                principalColumn: "VoorstellingId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
