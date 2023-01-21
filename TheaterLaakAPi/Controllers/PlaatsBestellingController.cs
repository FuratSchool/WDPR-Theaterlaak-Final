using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.Controllers;

public class PlaatsBestellingController : ControllerBase
{

        private readonly DatabaseContext _context;

        public PlaatsBestellingController (DatabaseContext context)
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
                            voorstellingId = vst.VoorstellingId,
                            voorstellingnaam= vst.Titel,
                            rangId = rang.RangId,
                            rangNr = rang.RangNr,
                            stoelid = stoel.StoelId,
                            stoelnr = stoel.StoelNr
                        };
            return Ok(query);
        }
    

}
