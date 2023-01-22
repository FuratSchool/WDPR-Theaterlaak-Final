using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TheaterLaakAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BestellingController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public BestellingController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Bestelling
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bestelling>>> GetBestelling()
        {
          if (_context.Bestelling == null)
          {
              return NotFound();
          }
            return await _context.Bestelling.ToListAsync();
        }

        // GET: api/Bestelling/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bestelling>> GetBestelling(int id)
        {
          if (_context.Bestelling == null)
          {
              return NotFound();
          }
            var bestelling = await _context.Bestelling.FindAsync(id);

            if (bestelling == null)
            {
                return NotFound();
            }

            return bestelling;
        }

        // PUT: api/Bestelling/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBestelling(int id, Bestelling bestelling)
        {
            if (id != bestelling.id)
            {
                return BadRequest();
            }

            _context.Entry(bestelling).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BestellingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Bestelling
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Bestelling>> PostBestelling(Bestelling bestelling)
        {
          if (_context.Bestelling == null)
          {
              return Problem("Entity set 'DatabaseContext.Bestelling'  is null.");
          }
            _context.Bestelling.Add(bestelling);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBestelling", new { id = bestelling.id }, bestelling);
        }

        // DELETE: api/Bestelling/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBestelling(int id)
        {
            if (_context.Bestelling == null)
            {
                return NotFound();
            }
            var bestelling = await _context.Bestelling.FindAsync(id);
            if (bestelling == null)
            {
                return NotFound();
            }

            _context.Bestelling.Remove(bestelling);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BestellingExists(int id)
        {
            return (_context.Bestelling?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
