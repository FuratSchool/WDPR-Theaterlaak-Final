using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Models;
using TheaterLaakAPi.ViewModels;

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

        // GET: api/Groep
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Zaal>>> GetGroep()
        {
            if (_context.Zaal == null)
            {
                return NotFound();
            }
            return await _context.Zaal.ToListAsync();
        }

        // POST: api/Zaal
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("CreateZaal")]
        public async Task<ActionResult<Zaal>> PostZaal(ZaalRangModelView zaalRangModelView)
        {
            if (_context.Zaal == null)
            {
                return Problem("Entity set 'DBContext.Zaal'  is null.");
            }
            Zaal zaal = new Zaal { Title = zaalRangModelView.Title };
            Rang eersteRang = new Rang
            {
                RangNr = 1,
                Capiciteit = zaalRangModelView.CapaciteitEersteRang,
                ZaalId = zaal.ZaalId,
                Zaal = zaal
            };
            Rang tweedeRang = new Rang
            {
                RangNr = 2,
                Capiciteit = zaalRangModelView.CapaciteitTweedeRang,
                ZaalId = zaal.ZaalId,
                Zaal = zaal
            };
            Rang derdeRang = new Rang
            {
                RangNr = 3,
                Capiciteit = zaalRangModelView.CapaciteitDerdeRang,
                ZaalId = zaal.ZaalId,
                Zaal = zaal
            };
            Console.WriteLine(eersteRang.ZaalId);

            _context.Zaal.Add(zaal);
            await _context.SaveChangesAsync();
            await addRangToZaal(
                new ZaalRang
                {
                    zaal = zaal,
                    eersteRang = eersteRang,
                    tweedeRang = tweedeRang,
                    derdeRang = derdeRang
                }
            );
            return Ok(zaal);
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task addRangToZaal(ZaalRang zaalRang)
        {
            Zaal zaalResult = await _context.Zaal.FindAsync(zaalRang.zaal.ZaalId);
            _context.Rangen.Add(zaalRang.eersteRang);
            _context.Rangen.Add(zaalRang.tweedeRang);
            _context.Rangen.Add(zaalRang.derdeRang);

            zaalResult.Rangen.Add(zaalRang.eersteRang);
            zaalResult.Rangen.Add(zaalRang.tweedeRang);
            zaalResult.Rangen.Add(zaalRang.derdeRang);

            _context.Zaal.Update(zaalResult);
            await _context.SaveChangesAsync();

            await addStoelToRang(zaalRang.eersteRang);
            await addStoelToRang(zaalRang.tweedeRang);
            await addStoelToRang(zaalRang.derdeRang);
            Console.WriteLine(zaalResult.Rangen.First());
        }

        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task addStoelToRang(Rang rang)
        {
            Rang rangResult = await _context.Rangen.FindAsync(rang.RangId);
            List<Stoel> stoelen = new List<Stoel>();

            for (int i = 1; i <= rangResult.Capiciteit; i++)
            {
                stoelen.Add(
                    new Stoel
                    {
                        StoelNr = i,
                        isInvalide = 0,
                        RangId = rangResult.RangId,
                        Rang = rangResult
                    }
                );
                foreach (var stoel in stoelen)
                {
                    _context.Stoelen.Add(stoel);
                    rangResult.Stoelen.Add(stoel);
                }
            }

            _context.Rangen.Update(rangResult);
            await _context.SaveChangesAsync();
        }
    }
}

public class ZaalRang
{
    public Zaal zaal { get; set; }
    public Rang eersteRang { get; set; }
    public Rang tweedeRang { get; set; }
    public Rang derdeRang { get; set; }
}
