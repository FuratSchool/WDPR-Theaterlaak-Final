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
    public class ZaalController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ZaalController(DatabaseContext context)
        {
            _context = context;
        }

        // POST: api/Zaal
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Zaal>> PostZaal(Zaal Zaal)
        {
            if (_context.Zaal == null)
            {
                return Problem("Entity set 'DBContext.Zaal'  is null.");
            }
            var stoel = new Stoel
            {
                Id = 0,
                StoelNr = 0,
                isInvalide = 0,
            };
            var stoelen = new List<Stoel>();
            stoelen.Add(stoel);
            var rangen = new Rang
            {
                RangNr = 0,
                Capiciteit = 60,
                Stoelen = stoelen,
                Zaal = Zaal
            };
            var rang = new List<Rang>();
            rang.Add(rangen);
            Console.WriteLine(rangen);
            var zaal = new Zaal { Title = "test", Rangen = rang };
            _context.Zaal.Add(zaal);
            await _context.SaveChangesAsync();

            return Ok(zaal);
        }
    }
}
