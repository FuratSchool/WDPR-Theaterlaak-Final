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

        // GET: api/Zaal
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Zaal>>> GetZaal(int id)
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
                            zaalnr = zaal.ZaalId,
                            zaalnaam= zaal.Title,
                            voorstellingId = vst.VoorstellingId,
                            voorstellingnaam= vst.Title,
                            rangId = rang.RangId,
                            rangNr = rang.RangNr,
                            stoelid = stoel.StoelId,
                            stoelnr = stoel.StoelNr
                        };
            return Ok(query);
        }


        // GET: api/Zaal/5
        // [HttpGet("{id}")]
        // public async Task<ActionResult<Zaal>> GetZaal(int id)
        // {
        //     if (_context.Zaal == null)
        //     {
        //         return NotFound();
        //     }
        //     var zaal = await _context.Zaal.FindAsync(id);

        //     if (zaal == null)
        //     {
        //         return NotFound();
        //     }

        //     return zaal;
        // }

        // PUT: api/Zaal/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutZaal(int id, Zaal zaal)
        {
            if (id != zaal.ZaalId)
            {
                return BadRequest();
            }

            _context.Entry(zaal).State = EntityState.Modified;

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

        // POST: api/Zaal
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Zaal>> PostZaal(Zaal zaal)
        {
            if (_context.Zaal == null)
            {
                return Problem("Entity set 'DatabaseContext.Zaal'  is null.");
            }
            _context.Zaal.Add(zaal);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetZaal", new { id = zaal.ZaalId }, zaal);
        }

        // DELETE: api/Zaal/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteZaal(int id)
        {
            if (_context.Zaal == null)
            {
                return NotFound();
            }
            var zaal = await _context.Zaal.FindAsync(id);
            if (zaal == null)
            {
                return NotFound();
            }

            _context.Zaal.Remove(zaal);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ZaalExists(int id)
        {
            return (_context.Zaal?.Any(e => e.ZaalId == id)).GetValueOrDefault();
        }
    }
}
