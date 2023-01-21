using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace TheaterLaakAPi.Migrations
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Discriminator = table.Column<string>(type: "TEXT", nullable: false),
                    Voornaam = table.Column<string>(type: "TEXT", nullable: true),
                    Achternaam = table.Column<string>(type: "TEXT", nullable: true),
                    UserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "TEXT", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    PasswordHash = table.Column<string>(type: "TEXT", nullable: true),
                    SecurityStamp = table.Column<string>(type: "TEXT", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "INTEGER", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "TEXT", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Groep",
                columns: table => new
                {
                    GroepId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GroepNaam = table.Column<string>(type: "TEXT", nullable: false),
                    BandWebsite = table.Column<string>(type: "TEXT", nullable: true),
                    LogoLink = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groep", x => x.GroepId);
                });

            migrationBuilder.CreateTable(
                name: "Zaal",
                columns: table => new
                {
                    ZaalId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zaal", x => x.ZaalId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    ClaimType = table.Column<string>(type: "TEXT", nullable: true),
                    ClaimValue = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderKey = table.Column<string>(type: "TEXT", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    RoleId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    LoginProvider = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Value = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
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
                        name: "FK_ArtiestGroep_Groep_GroepenGroepId",
                        column: x => x.GroepenGroepId,
                        principalTable: "Groep",
                        principalColumn: "GroepId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rang",
                columns: table => new
                {
                    RangId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RangNr = table.Column<int>(type: "INTEGER", nullable: false),
                    Capiciteit = table.Column<int>(type: "INTEGER", nullable: false),
                    ZaalId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rang", x => x.RangId);
                    table.ForeignKey(
                        name: "FK_Rang_Zaal_ZaalId",
                        column: x => x.ZaalId,
                        principalTable: "Zaal",
                        principalColumn: "ZaalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Voorstelling",
                columns: table => new
                {
                    VoorstellingId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Titel = table.Column<string>(type: "TEXT", nullable: false),
                    Tijd = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Beschrijving = table.Column<string>(type: "TEXT", nullable: false),
                    Prijs = table.Column<double>(type: "REAL", nullable: false),
                    StartDatum = table.Column<DateTime>(type: "TEXT", nullable: false),
                    EindDatum = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ZaalId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Voorstelling", x => x.VoorstellingId);
                    table.ForeignKey(
                        name: "FK_Voorstelling_Zaal_ZaalId",
                        column: x => x.ZaalId,
                        principalTable: "Zaal",
                        principalColumn: "ZaalId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Stoel",
                columns: table => new
                {
                    StoelId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StoelNr = table.Column<int>(type: "INTEGER", nullable: false),
                    isInvalide = table.Column<int>(type: "INTEGER", nullable: false),
                    RangId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stoel", x => x.StoelId);
                    table.ForeignKey(
                        name: "FK_Stoel_Rang_RangId",
                        column: x => x.RangId,
                        principalTable: "Rang",
                        principalColumn: "RangId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GroepVoorstelling",
                columns: table => new
                {
                    GroepenGroepId = table.Column<int>(type: "INTEGER", nullable: false),
                    VoorstellingenVoorstellingId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GroepVoorstelling", x => new { x.GroepenGroepId, x.VoorstellingenVoorstellingId });
                    table.ForeignKey(
                        name: "FK_GroepVoorstelling_Groep_GroepenGroepId",
                        column: x => x.GroepenGroepId,
                        principalTable: "Groep",
                        principalColumn: "GroepId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GroepVoorstelling_Voorstelling_VoorstellingenVoorstellingId",
                        column: x => x.VoorstellingenVoorstellingId,
                        principalTable: "Voorstelling",
                        principalColumn: "VoorstellingId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Reservering",
                columns: table => new
                {
                    ReserveringId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ReserveringsDatum = table.Column<DateTime>(type: "TEXT", nullable: false),
                    isBetaald = table.Column<int>(type: "INTEGER", nullable: false),
                    StoelId = table.Column<int>(type: "INTEGER", nullable: false),
                    ApplicationUserId = table.Column<int>(type: "INTEGER", nullable: true),
                    ApplicationUserId1 = table.Column<string>(type: "TEXT", nullable: true),
                    VoorstellingId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservering", x => x.ReserveringId);
                    table.ForeignKey(
                        name: "FK_Reservering_AspNetUsers_ApplicationUserId1",
                        column: x => x.ApplicationUserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Reservering_Stoel_StoelId",
                        column: x => x.StoelId,
                        principalTable: "Stoel",
                        principalColumn: "StoelId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservering_Voorstelling_VoorstellingId",
                        column: x => x.VoorstellingId,
                        principalTable: "Voorstelling",
                        principalColumn: "VoorstellingId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Zaal",
                column: "ZaalId",
                values: new object[]
                {
                    1,
                    2
                });

            migrationBuilder.InsertData(
                table: "Rang",
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
                    { 1, "miauw", new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15.0, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "kat", 1 },
                    { 2, "woef", new DateTime(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15.0, new DateTime(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 2, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "hond", 1 },
                    { 3, "growl", new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 15.0, new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2023, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "luipaard", 2 }
                });

            migrationBuilder.InsertData(
                table: "Stoel",
                columns: new[] { "StoelId", "RangId", "StoelNr", "isInvalide" },
                values: new object[,]
                {
                    { 1, 1, 1, 0 },
                    { 2, 1, 2, 0 },
                    { 3, 2, 1, 0 },
                    { 4, 2, 2, 0 },
                    { 5, 3, 1, 0 },
                    { 7, 4, 1, 1 },
                    { 8, 4, 2, 0 },
                    { 9, 5, 1, 0 }
                });

            migrationBuilder.InsertData(
                table: "Reservering",
                columns: new[] { "ReserveringId", "ApplicationUserId", "ApplicationUserId1", "ReserveringsDatum", "StoelId", "VoorstellingId", "isBetaald" },
                values: new object[,]
                {
                    { 1, 1, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 1, 0 },
                    { 2, 2, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, 1, 0 },
                    { 3, 3, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 3, 1, 1 },
                    { 4, 4, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 2, 0 },
                    { 5, 5, null, new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 2, 2, 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArtiestGroep_GroepenGroepId",
                table: "ArtiestGroep",
                column: "GroepenGroepId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GroepVoorstelling_VoorstellingenVoorstellingId",
                table: "GroepVoorstelling",
                column: "VoorstellingenVoorstellingId");

            migrationBuilder.CreateIndex(
                name: "IX_Rang_ZaalId",
                table: "Rang",
                column: "ZaalId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservering_ApplicationUserId1",
                table: "Reservering",
                column: "ApplicationUserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Reservering_StoelId",
                table: "Reservering",
                column: "StoelId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservering_VoorstellingId",
                table: "Reservering",
                column: "VoorstellingId");

            migrationBuilder.CreateIndex(
                name: "IX_Stoel_RangId",
                table: "Stoel",
                column: "RangId");

            migrationBuilder.CreateIndex(
                name: "IX_Voorstelling_ZaalId",
                table: "Voorstelling",
                column: "ZaalId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArtiestGroep");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "GroepVoorstelling");

            migrationBuilder.DropTable(
                name: "Reservering");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Groep");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "Stoel");

            migrationBuilder.DropTable(
                name: "Voorstelling");

            migrationBuilder.DropTable(
                name: "Rang");

            migrationBuilder.DropTable(
                name: "Zaal");
        }
    }
}
