using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReserveringController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ReserveringController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Reservering
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservering>>> GetReservering()
        {
            if (_context.Reserveringen == null)
            {
                return NotFound();
            }
            return await _context.Reserveringen.ToListAsync();
        }
    }
    }