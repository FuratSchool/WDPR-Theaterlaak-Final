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


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Zaal>>> GetZaal()
        {
          if (_context.Zaal == null)
          {
              return NotFound();
          }
            return await _context.Zaal.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Zaal>> GetZaal(int id)
        {
          if (_context.Zaal == null)
          {
              return NotFound();
          }
            var Zaal = await _context.Zaal.FindAsync(id);

            if (Zaal == null)
            {
                return NotFound();
            }

            return Zaal;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutZaal(int id, Zaal Zaal)
        {
            if (id != Zaal.Id)
            {
                return BadRequest();
            }

            _context.Entry(Zaal).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ZaalExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Zaal>> PostZaal(Zaal Zaal)
        {
          if (_context.Zaal == null)
          {
              return Problem("Entity set 'DBContext.Zaal'  is null.");
          }
            _context.Zaal.Add(Zaal);
            await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetZaal), new { id = Zaal.Id }, Zaal);
        }

        // DELETE: api/Zaal/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteZaal(int id)
        {
            if (_context.Zaal == null)
            {
                return NotFound();
            }
            var Zaal = await _context.Zaal.FindAsync(id);
            if (Zaal == null)
            {
                return NotFound();
            }

            _context.Zaal.Remove(Zaal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ZaalExists(int id)
        {
            return (_context.Zaal?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
