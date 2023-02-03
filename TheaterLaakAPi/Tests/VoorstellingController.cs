using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using TheaterLaakAPi.Controllers;
using TheaterLaakAPi.Models;
using TheaterLaakAPi.ViewModels;
using Xunit;

namespace TheaterLaakAPi.Tests
{
    public class VoorstellingControllerTests
    {
        private readonly VoorstellingController _controller;
        private readonly Mock<DbSet<Voorstelling>> _mockVoorstelling;
        private readonly Mock<DbSet<Groep>> _mockGroep;
        private readonly Mock<DbSet<Zaal>> _mockZaal;
        private readonly Mock<DatabaseContext> _mockContext;

        public VoorstellingControllerTests()
        {
            _mockVoorstelling = new Mock<DbSet<Voorstelling>>();
            _mockGroep = new Mock<DbSet<Groep>>();
            _mockZaal = new Mock<DbSet<Zaal>>();
            _mockContext = new Mock<DatabaseContext>();
            _controller = new VoorstellingController(_mockContext.Object);
        }

        [Fact]
        public async Task GetVoorstelling_ReturnsNotFound_WhenVoorstellingIsNull()
        {
            // Arrange
            _mockContext.Setup(c => c.Voorstelling).Returns((DbSet<Voorstelling>)null);

            // Act
            var result = await _controller.GetVoorstelling();

            // Assert
            var notFoundResult = Assert.IsType<NotFoundResult>(result);
            Assert.Equal(StatusCodes.Status404NotFound, notFoundResult.StatusCode);
        }

        [Fact]
        public async Task GetVoorstelling_ReturnsVoorstellingList_WhenVoorstellingIsNotNull()
        {
            // Arrange
            var voorstellingList = new List<Voorstelling>
        {
            new Voorstelling { VoorstellingId = 1, Title = "Voorstelling 1" },
            new Voorstelling { VoorstellingId = 2, Title = "Voorstelling 2" }
        };
            _mockVoorstelling.As<IQueryable<Voorstelling>>().Setup(m => m.Provider).Returns(voorstellingList.AsQueryable().Provider);
            _mockVoorstelling.As<IQueryable<Voorstelling>>().Setup(m => m.Expression).Returns(voorstellingList.AsQueryable().Expression);
            _mockVoorstelling.As<IQueryable<Voorstelling>>().Setup(m => m.ElementType).Returns(voorstellingList.AsQueryable().ElementType);
            _mockVoorstelling.As<IQueryable<Voorstelling>>().Setup(m => m.GetEnumerator()).Returns(voorstellingList.AsQueryable().GetEnumerator());
            _mockContext.Setup(c => c.Voorstelling).Returns(_mockVoorstelling.Object);
        }

    }
}