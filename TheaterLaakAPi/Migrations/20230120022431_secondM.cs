using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class secondM : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rang_Zaal_ZaalId",
                table: "Rang");

            migrationBuilder.DropForeignKey(
                name: "FK_Stoel_Rang_RangId",
                table: "Stoel");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstelling_Zaal_ZaalId",
                table: "Voorstelling");

            migrationBuilder.AlterColumn<int>(
                name: "ZaalId",
                table: "Voorstelling",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Datum",
                table: "Voorstelling",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<int>(
                name: "invalide",
                table: "Stoel",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "StoelNr",
                table: "Stoel",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "RangId",
                table: "Stoel",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "ZaalId",
                table: "Rang",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "RangNr",
                table: "Rang",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Rang_Zaal_ZaalId",
                table: "Rang",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "ZaalId");

            migrationBuilder.AddForeignKey(
                name: "FK_Stoel_Rang_RangId",
                table: "Stoel",
                column: "RangId",
                principalTable: "Rang",
                principalColumn: "RangId");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstelling_Zaal_ZaalId",
                table: "Voorstelling",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "ZaalId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rang_Zaal_ZaalId",
                table: "Rang");

            migrationBuilder.DropForeignKey(
                name: "FK_Stoel_Rang_RangId",
                table: "Stoel");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstelling_Zaal_ZaalId",
                table: "Voorstelling");

            migrationBuilder.AlterColumn<int>(
                name: "ZaalId",
                table: "Voorstelling",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "Datum",
                table: "Voorstelling",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                oldClrType: typeof(DateTime),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "invalide",
                table: "Stoel",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "StoelNr",
                table: "Stoel",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RangId",
                table: "Stoel",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ZaalId",
                table: "Rang",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RangNr",
                table: "Rang",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Rang_Zaal_ZaalId",
                table: "Rang",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "ZaalId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Stoel_Rang_RangId",
                table: "Stoel",
                column: "RangId",
                principalTable: "Rang",
                principalColumn: "RangId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstelling_Zaal_ZaalId",
                table: "Voorstelling",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "ZaalId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
