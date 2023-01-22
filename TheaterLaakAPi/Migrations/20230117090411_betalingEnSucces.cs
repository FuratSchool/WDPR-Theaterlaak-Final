using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class betalingEnSucces : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "betalingReference",
                table: "Succes",
                newName: "reference");

            migrationBuilder.AddColumn<string>(
                name: "BetalingId",
                table: "Betaling",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BetalingId",
                table: "Betaling");

            migrationBuilder.RenameColumn(
                name: "reference",
                table: "Succes",
                newName: "betalingReference");
        }
    }
}
