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
    public class RangController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public RangController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Rang
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rang>>> GetRang()
        {
            if (_context.Rangen == null)
            {
                return NotFound();
            }
            return await _context.Rangen.ToListAsync();
        }

        // GET: api/Rang/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Rang>> GetRang(int id)
        {
            if (_context.Rangen == null)
            {
                return NotFound();
            }
            var rang = await _context.Rangen.FindAsync(id);

            if (rang == null)
            {
                return NotFound();
            }

            return rang;
        }

        // PUT: api/Rang/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRang(int id, Rang rang)
        {
            if (id != rang.RangId)
            {
                return BadRequest();
            }

            _context.Entry(rang).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RangExists(id))
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

        // POST: api/Rang
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Rang>> PostRang(Rang rang)
        {
            if (_context.Rangen == null)
            {
                return Problem("Entity set 'DatabaseContext.Rang'  is null.");
            }
            _context.Rangen.Add(rang);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRang", new { id = rang.RangId }, rang);
        }

        // DELETE: api/Rang/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRang(int id)
        {
            if (_context.Rangen == null)
            {
                return NotFound();
            }
            var rang = await _context.Rangen.FindAsync(id);
            if (rang == null)
            {
                return NotFound();
            }

            _context.Rangen.Remove(rang);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RangExists(int id)
        {
            return (_context.Rangen?.Any(e => e.RangId == id)).GetValueOrDefault();
        }
    }
}
