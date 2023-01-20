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
    public class VoorstellingController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public VoorstellingController(DatabaseContext context)
        {
            _context = context;
        }



        [HttpGet]
        [Route("/info/{id}")]
        public async Task<ActionResult<IEnumerable<Zaal>>> getVoorstellingInfo(int id)
        {
            var query = from zaal in _context.Zaal 
                        from vst in _context.Voorstelling
                        from rang in _context.Rang
                        from stoel in _context.Stoel
                        where zaal.ZaalId == vst.ZaalId
                        where rang.ZaalId == zaal.ZaalId
                        where stoel.RangId == rang.RangId
                        where vst.VoorstellingId == id

                        select new{
                            voorstellingId = vst.VoorstellingId,
                            zaalnr = zaal.ZaalId,
                            zaalnaam= zaal.Title,
                            voorstellingnaam= vst.Title,
                            rangNr = rang.RangNr,
                            stoelnr = stoel.StoelNr
                        };

            
            return Ok(query);
        }
        // GET: api/Voorstelling
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Voorstelling>>> GetVoorstelling()
        {
          if (_context.Voorstelling == null)
          {
              return NotFound();
          }
            return await _context.Voorstelling.ToListAsync();
        }

        // GET: api/Voorstelling/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Voorstelling>> GetVoorstelling(int id)
        {
          if (_context.Voorstelling == null)
          {
              return NotFound();
          }
            var voorstelling = await _context.Voorstelling.FindAsync(id);

            if (voorstelling == null)
            {
                return NotFound();
            }

            return voorstelling;
        }

        // PUT: api/Voorstelling/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVoorstelling(int id, Voorstelling voorstelling)
        {
            if (id != voorstelling.VoorstellingId)
            {
                return BadRequest();
            }

            _context.Entry(voorstelling).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VoorstellingExists(id))
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

        // POST: api/Voorstelling
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Voorstelling>> PostVoorstelling(Voorstelling voorstelling)
        {
          if (_context.Voorstelling == null)
          {
              return Problem("Entity set 'DatabaseContext.Voorstelling'  is null.");
          }
            _context.Voorstelling.Add(voorstelling);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVoorstelling", new { id = voorstelling.VoorstellingId }, voorstelling);
        }

        // DELETE: api/Voorstelling/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVoorstelling(int id)
        {
            if (_context.Voorstelling == null)
            {
                return NotFound();
            }
            var voorstelling = await _context.Voorstelling.FindAsync(id);
            if (voorstelling == null)
            {
                return NotFound();
            }

            _context.Voorstelling.Remove(voorstelling);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VoorstellingExists(int id)
        {
            return (_context.Voorstelling?.Any(e => e.VoorstellingId == id)).GetValueOrDefault();
        }
    }
}
