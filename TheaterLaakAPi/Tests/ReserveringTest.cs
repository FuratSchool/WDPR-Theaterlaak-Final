using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Controllers;
using TheaterLaakAPi.Models;
using Xunit;

namespace TheaterLaakAPi.Tests
{
    public class ReserveringControllerTests
    {
        private readonly ReserveringController _controller;
        private readonly DatabaseContext _context;

        public ReserveringControllerTests()
        {
            var options = new DbContextOptionsBuilder<DatabaseContext>()
                .UseInMemoryDatabase(databaseName: "TestReserveringDB")
                .Options;

            _context = new DatabaseContext(options);
            _controller = new ReserveringController(_context);

            _context.Reserveringen.Add(new Reservering { VoorstellingId = 1, StoelId = 2, ReserveringId = 1 });
            _context.SaveChanges();
        }

        [Fact]
        public async Task GetReservering_ReturnsReserveringList()
        {
            var result = await _controller.GetReservering();

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var reserveringen = Assert.IsAssignableFrom<List<Reservering>>(okResult.Value);
            Assert.Equal(1, reserveringen.Count);
        }

        [Fact]
        public async Task GetSpecificReservering_ReturnsReserveringId()
        {
            var result = await _controller.GetSpecificReservering(1, 2);

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            Assert.Equal(1, okResult.Value);
        }

        [Fact]
        public async Task GetSpecificReservering_InvalidVidSid_ReturnsNotFound()
        {
            var result = await _controller.GetSpecificReservering(2, 3);

            Assert.IsType<NotFoundResult>(result.Result);
        }
    }
}