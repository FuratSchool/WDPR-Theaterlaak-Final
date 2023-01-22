using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class betalingNieuw : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Succes");

            migrationBuilder.DropColumn(
                name: "amount",
                table: "Betaling");

            migrationBuilder.DropColumn(
                name: "url",
                table: "Betaling");

            migrationBuilder.RenameColumn(
                name: "isBetaald",
                table: "Betaling",
                newName: "succes");

            migrationBuilder.AddColumn<string>(
                name: "reference",
                table: "Betaling",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "reference",
                table: "Betaling");

            migrationBuilder.RenameColumn(
                name: "succes",
                table: "Betaling",
                newName: "isBetaald");

            migrationBuilder.AddColumn<int>(
                name: "amount",
                table: "Betaling",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "url",
                table: "Betaling",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Succes",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    reference = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Succes", x => x.id);
                });
        }
    }
}
