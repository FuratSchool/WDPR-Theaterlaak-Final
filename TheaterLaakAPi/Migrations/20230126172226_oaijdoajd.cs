using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class oaijdoajd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reserveringen_AspNetUsers_ApplicationUserId1",
                table: "Reserveringen");

            migrationBuilder.DropIndex(
                name: "IX_Reserveringen_ApplicationUserId1",
                table: "Reserveringen");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId1",
                table: "Reserveringen");

            migrationBuilder.AlterColumn<string>(
                name: "ApplicationUserId",
                table: "Reserveringen",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 1,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 2,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 3,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 4,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 5,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 6,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 7,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 8,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 9,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 10,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 11,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 12,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 13,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 14,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 15,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 16,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 17,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 18,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 19,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 20,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 21,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 22,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 23,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 24,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 25,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 26,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 27,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 28,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 29,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 30,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 31,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 32,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 33,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 34,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 35,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 36,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 37,
                column: "ApplicationUserId",
                value: null);

            migrationBuilder.CreateIndex(
                name: "IX_Reserveringen_ApplicationUserId",
                table: "Reserveringen",
                column: "ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reserveringen_AspNetUsers_ApplicationUserId",
                table: "Reserveringen",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reserveringen_AspNetUsers_ApplicationUserId",
                table: "Reserveringen");

            migrationBuilder.DropIndex(
                name: "IX_Reserveringen_ApplicationUserId",
                table: "Reserveringen");

            migrationBuilder.AlterColumn<int>(
                name: "ApplicationUserId",
                table: "Reserveringen",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ApplicationUserId1",
                table: "Reserveringen",
                type: "TEXT",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 1,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 2,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 3,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 4,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 5,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 6,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 7,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 8,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 9,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 10,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 11,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 12,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 13,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 14,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 15,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 16,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 17,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 18,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 19,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 20,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 21,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 22,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 23,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 24,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 25,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 26,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 27,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 28,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 29,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 30,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 31,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 32,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 33,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 34,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 35,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 36,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.UpdateData(
                table: "Reserveringen",
                keyColumn: "ReserveringId",
                keyValue: 37,
                columns: new[] { "ApplicationUserId", "ApplicationUserId1" },
                values: new object[] { null, null });

            migrationBuilder.CreateIndex(
                name: "IX_Reserveringen_ApplicationUserId1",
                table: "Reserveringen",
                column: "ApplicationUserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Reserveringen_AspNetUsers_ApplicationUserId1",
                table: "Reserveringen",
                column: "ApplicationUserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
