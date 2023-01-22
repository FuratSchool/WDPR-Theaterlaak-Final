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
    public class StoelController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public StoelController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Stoel
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stoel>>> GetStoel()
        {
            if (_context.Stoelen == null)
            {
                return NotFound();
            }
            return await _context.Stoelen.ToListAsync();
        }

        // GET: api/Stoel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Stoel>> GetStoel(int id)
        {
            if (_context.Stoelen == null)
            {
                return NotFound();
            }
            var stoel = await _context.Stoelen.FindAsync(id);

            if (stoel == null)
            {
                return NotFound();
            }

            return stoel;
        }

        // PUT: api/Stoel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStoel(int id, Stoel stoel)
        {
            if (id != stoel.StoelId)
            {
                return BadRequest();
            }

            _context.Entry(stoel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoelExists(id))
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

        // POST: api/Stoel
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Stoel>> PostStoel(Stoel stoel)
        {
            if (_context.Stoelen == null)
            {
                return Problem("Entity set 'DatabaseContext.Stoel'  is null.");
            }
            _context.Stoelen.Add(stoel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStoel", new { id = stoel.StoelId }, stoel);
        }

        // DELETE: api/Stoel/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStoel(int id)
        {
            if (_context.Stoelen == null)
            {
                return NotFound();
            }
            var stoel = await _context.Stoelen.FindAsync(id);
            if (stoel == null)
            {
                return NotFound();
            }

            _context.Stoelen.Remove(stoel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StoelExists(int id)
        {
            return (_context.Stoelen?.Any(e => e.StoelId == id)).GetValueOrDefault();
        }
    }
}
