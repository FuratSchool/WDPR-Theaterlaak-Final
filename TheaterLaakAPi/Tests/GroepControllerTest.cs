using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheaterLaakAPi.Controllers;
using TheaterLaakAPi.Models;
using Xunit;

namespace TheaterLaakAPi.Tests
{
    public class GroepControllerTests
    {
        private readonly GroepController _controller;
        private readonly Mock<UserManager<ApplicationUser>> _mockUserManager;
        private readonly Mock<DbSet<Groep>> _mockGroepenDbSet;
        private readonly Mock<DatabaseContext> _mockContext;

        public GroepControllerTests()
        {
            _mockContext = new Mock<DatabaseContext>();
            _mockUserManager = new Mock<UserManager<ApplicationUser>>();
            _mockGroepenDbSet = new Mock<DbSet<Groep>>();
            _controller = new GroepController(_mockContext.Object, _mockUserManager.Object);
        }

        [Fact]
        public async Task GetGroep_Should_Return_NotFound_When_Groepen_Is_Null()
        {
            // Arrange
            _mockContext.SetupGet(x => x.Groepen).Returns((DbSet<Groep>)null);

            // Act
            var result = await _controller.GetGroep();

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task GetGroep_Should_Return_List_Of_Groepen_When_Groepen_Is_Not_Null()
        {
            // Arrange
            var groepen = new List<Groep> { new Groep(), new Groep() };
            _mockGroepenDbSet.As<IQueryable<Groep>>().Setup(m => m.Provider).Returns(groepen.AsQueryable().Provider);
            _mockGroepenDbSet.As<IQueryable<Groep>>().Setup(m => m.Expression).Returns(groepen.AsQueryable().Expression);
            _mockGroepenDbSet.As<IQueryable<Groep>>().Setup(m => m.ElementType).Returns(groepen.AsQueryable().ElementType);
            _mockGroepenDbSet.As<IQueryable<Groep>>().Setup(m => m.GetEnumerator()).Returns(groepen.AsQueryable().GetEnumerator());
            _mockContext.SetupGet(x => x.Groepen).Returns(_mockGroepenDbSet.Object);

            // Act
            var result = await _controller.GetGroep();

            // Assert
            var okResult = result;
            Assert.NotNull(okResult);
            var groepenResult = okResult.Value as List<Groep>;
            Assert.Equal(2, groepenResult.Count);
        }
    }
}