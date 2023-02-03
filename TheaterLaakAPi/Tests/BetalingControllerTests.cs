using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using TheaterLaakAPi.Controllers;
using TheaterLaakAPi.Models;
using Xunit;

namespace Tests
{
    public class BetalingControllerTests
    {
        private readonly Mock<DatabaseContext> _mockContext;
        private readonly BetalingController _controller;

        public BetalingControllerTests()
        {
            _mockContext = new Mock<DatabaseContext>();
            _controller = new BetalingController(_mockContext.Object);
        }

        [Fact]
        public async Task TestSuccesBetaling()
        {
            // Arrange
            var betaling = new Betaling
            {
                id = 1,
                succes = true
            };

            _mockContext.Setup(c => c.Betaling.Add(It.IsAny<Betaling>())) //voegt een instantie v Betaling toe aan mockContext. Any instantie van betaling kan meegegeven worden aan add
                .Callback<Betaling>(b => b.id = betaling.id); // betaling Id aan de betaling property id toegevoegd.
            _mockContext.Setup(c => c.SaveChangesAsync(default))  //default om de default waarde van de cancellationtoken te gebruiken
                .ReturnsAsync(1); //1 om de aantal entities die zijn toegevoegd te simulaten, 1 entity toegevoegd.

            // Act
            var result = await _controller.PostBetaling(betaling);

            // Assert
            var redirectResult = Assert.IsType<RedirectResult>(result);
            Assert.Equal("http://localhost:3000/Succes", redirectResult.Url);
        }

        [Fact]
        public async Task TestFalseBetaling()
        {
            // Arrange
            var betaling = new Betaling
            {
                id = 1,
                succes = false
            };

            _mockContext.Setup(c => c.Betaling.Add(It.IsAny<Betaling>()))
                .Callback<Betaling>(b => b.id = betaling.id);
            _mockContext.Setup(c => c.SaveChangesAsync(default))
                .ReturnsAsync(1);

            // Act
            var result = await _controller.PostBetaling(betaling);

            // Assert
            var redirectResult = Assert.IsType<RedirectResult>(result);
            Assert.Equal("http://localhost:3000/Cancel", redirectResult.Url);
        }

        [Fact]
        public async Task testBetalingNotFound()
        {
            // Arrange
            _mockContext.Setup(c => c.Betaling.FindAsync(1))
                .ReturnsAsync((Betaling)null);

            // Act
            var result = await _controller.GetBetaling(1);

            // Assert
            Assert.IsType<NotFoundResult>(result.Result);
        }
    }
}
