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
    public class GroepController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public GroepController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Groep
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Groepen>>> GetGroep()
        {
          if (_context.Groepen == null)
          {
              return NotFound();
          }
            return await _context.Groepen.ToListAsync();
        }

         // POST: api/Groep
        [HttpPost]
        public async Task<ActionResult<Groepen>> PostGroep(Groepen groep)
        {
          if (_context.Groepen == null)
          {
              return Problem("Entity set 'DBContext.Groep'  is null.");
          }
            _context.Groepen.Add(groep);
            await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetGroep), new { id = groep.Id }, groep);
        }



  
    }
}
