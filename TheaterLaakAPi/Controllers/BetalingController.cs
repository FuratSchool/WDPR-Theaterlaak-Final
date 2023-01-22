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
    public class BetalingController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public BetalingController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Betaling
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Betaling>>> GetBetaling()
        {
            if (_context.Betaling == null)
            {
                return NotFound();
            }
            return await _context.Betaling.ToListAsync();
        }

        // GET: api/Betaling/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Betaling>> GetBetaling(int id)
        {
            if (_context.Betaling == null)
            {
                return NotFound();
            }
            var betaling = await _context.Betaling.FindAsync(id);

            if (betaling == null)
            {
                return NotFound();
            }

            return betaling;
        }

        // PUT: api/Betaling/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBetaling(int id, Betaling betaling)
        {
            if (id != betaling.id)
            {
                return BadRequest();
            }

            _context.Entry(betaling).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BetalingExists(id))
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

        // POST: api/Betaling
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Betaling>> PostBetaling([FromForm] Betaling betaling)
        {
            if (_context.Betaling == null)
            {
                return Problem("Entity set 'DatabaseContext.Betaling'  is null.");
            }
            // Betaling betaling = new Betaling();
            // betaling.reference = reference;
            _context.Betaling.Add(betaling);
            await _context.SaveChangesAsync();
            if (betaling.succes == false)
            {
                //betaling is niet gelukt!
                return Redirect("http://localhost:3000/Cancel");
            }
            else
            {

                //dit geval wel
                return Redirect("http://localhost:3000/Succes");
            }
            // return CreatedAtAction("GetBetaling", new { id = betaling.id }, betaling);
        }

        // DELETE: api/Betaling/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBetaling(int id)
        {
            if (_context.Betaling == null)
            {
                return NotFound();
            }
            var betaling = await _context.Betaling.FindAsync(id);
            if (betaling == null)
            {
                return NotFound();
            }

            _context.Betaling.Remove(betaling);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BetalingExists(int id)
        {
            return (_context.Betaling?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
