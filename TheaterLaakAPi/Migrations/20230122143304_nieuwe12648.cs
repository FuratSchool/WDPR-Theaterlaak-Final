using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class nieuwe12648 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SoortZaal",
                table: "Zaal");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Zaal",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "GroepId",
                table: "Voorstelling",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ZaalId",
                table: "Voorstelling",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Achternaam",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Voornaam",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Groepen",
                columns: table => new
                {
                    GroepId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GroepNaam = table.Column<string>(type: "TEXT", nullable: true),
                    BandWebsite = table.Column<string>(type: "TEXT", nullable: true),
                    LogoLink = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groepen", x => x.GroepId);
                });

            migrationBuilder.CreateTable(
                name: "Rang",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RangNr = table.Column<int>(type: "INTEGER", nullable: false),
                    Capiciteit = table.Column<int>(type: "INTEGER", nullable: false),
                    ZaalId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rang", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Rang_Zaal_ZaalId",
                        column: x => x.ZaalId,
                        principalTable: "Zaal",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArtiestGroep",
                columns: table => new
                {
                    ArtiestenId = table.Column<string>(type: "TEXT", nullable: false),
                    GroepenGroepId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArtiestGroep", x => new { x.ArtiestenId, x.GroepenGroepId });
                    table.ForeignKey(
                        name: "FK_ArtiestGroep_AspNetUsers_ArtiestenId",
                        column: x => x.ArtiestenId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArtiestGroep_Groepen_GroepenGroepId",
                        column: x => x.GroepenGroepId,
                        principalTable: "Groepen",
                        principalColumn: "GroepId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Stoel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StoelNr = table.Column<int>(type: "INTEGER", nullable: false),
                    isInvalide = table.Column<int>(type: "INTEGER", nullable: false),
                    RangId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stoel", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stoel_Rang_RangId",
                        column: x => x.RangId,
                        principalTable: "Rang",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Voorstelling_GroepId",
                table: "Voorstelling",
                column: "GroepId");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstelling_ZaalId",
                table: "Voorstelling",
                column: "ZaalId");

            migrationBuilder.CreateIndex(
                name: "IX_ArtiestGroep_GroepenGroepId",
                table: "ArtiestGroep",
                column: "GroepenGroepId");

            migrationBuilder.CreateIndex(
                name: "IX_Rang_ZaalId",
                table: "Rang",
                column: "ZaalId");

            migrationBuilder.CreateIndex(
                name: "IX_Stoel_RangId",
                table: "Stoel",
                column: "RangId");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstelling_Groepen_GroepId",
                table: "Voorstelling",
                column: "GroepId",
                principalTable: "Groepen",
                principalColumn: "GroepId");

            migrationBuilder.AddForeignKey(
                name: "FK_Voorstelling_Zaal_ZaalId",
                table: "Voorstelling",
                column: "ZaalId",
                principalTable: "Zaal",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Voorstelling_Groepen_GroepId",
                table: "Voorstelling");

            migrationBuilder.DropForeignKey(
                name: "FK_Voorstelling_Zaal_ZaalId",
                table: "Voorstelling");

            migrationBuilder.DropTable(
                name: "ArtiestGroep");

            migrationBuilder.DropTable(
                name: "Stoel");

            migrationBuilder.DropTable(
                name: "Groepen");

            migrationBuilder.DropTable(
                name: "Rang");

            migrationBuilder.DropIndex(
                name: "IX_Voorstelling_GroepId",
                table: "Voorstelling");

            migrationBuilder.DropIndex(
                name: "IX_Voorstelling_ZaalId",
                table: "Voorstelling");

            migrationBuilder.DropColumn(
                name: "GroepId",
                table: "Voorstelling");

            migrationBuilder.DropColumn(
                name: "ZaalId",
                table: "Voorstelling");

            migrationBuilder.DropColumn(
                name: "Achternaam",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Voornaam",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Zaal",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<string>(
                name: "SoortZaal",
                table: "Zaal",
                type: "TEXT",
                nullable: true);
        }
    }
}
