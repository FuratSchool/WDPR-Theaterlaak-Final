using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Controllers;

namespace Tests;

public class BetalingControllerTests
{
    private readonly DatabaseContext _context;
    private readonly BetalingController _controller;

    [Fact]
    public async Task Betaling_true()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<DatabaseContext>()
            .UseInMemoryDatabase(databaseName: "Test_true_db")
            .Options;

        using (var context = new DatabaseContext(options))
        {
            var controller = new BetalingController(context);

            var betaling = new Betaling
            {
                id = 1,
                succes = true
            };

            // Act
            var result = await controller.PostBetaling(betaling);

            // Assert
            var redirectResult = Assert.IsType<RedirectResult>(result);
            Assert.Equal("http://localhost:3000/Succes", redirectResult.Url);
        }
    }
    [Fact]
    public async Task Betaling_false()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<DatabaseContext>()
            .UseInMemoryDatabase(databaseName: "Test_false_db")
            .Options;

        using (var context = new DatabaseContext(options))
        {
            var controller = new BetalingController(context);

            var betaling = new Betaling
            {
                id = 1,
                succes = false
            };

            // Act
            var result = await controller.PostBetaling(betaling);

            // Assert
            var redirectResult = Assert.IsType<RedirectResult>(result);
            Assert.Equal("http://localhost:3000/Cancel", redirectResult.Url);
        }
    }

}