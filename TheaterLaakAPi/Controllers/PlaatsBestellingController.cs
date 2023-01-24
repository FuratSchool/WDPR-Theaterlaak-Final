using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.Controllers;

public class PlaatsBestellingController : ControllerBase
{

    private readonly DatabaseContext _context;

    public PlaatsBestellingController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("beschikbarestoelen/{id}")]

    public async Task<ActionResult<IEnumerable<Zaal>>> getBeschikbareStoelen(int id)
    {
        if (_context.Reserveringen == null)
        {
            return NotFound();
        }
        if (_context.Stoelen == null)
        {
            return NotFound();
        }
        if (_context.Voorstelling == null)
        {
            return NotFound();
        }

        var Reservering = await _context.Reserveringen.ToListAsync();
        var Stoel = await _context.Stoelen.ToListAsync();
        var Voorstelling = await _context.Voorstelling.ToListAsync();

        if (Reservering == null)
        {
            return NotFound();
        }
        if (Stoel == null)
        {
            return NotFound();
        }
        if (Voorstelling == null)
        {
            return NotFound();
        }

        var queryBetaaldeStoelen = from rs in Reservering
                                   from s in Stoel
                                   from v in Voorstelling
                                   where s.StoelId == rs.StoelId
                                   where rs.VoorstellingId == v.VoorstellingId
                                   where rs.VoorstellingId == id
                                   where rs.isBetaald == 0

                                   select new
                                   {
                                       rangNr = s.RangId,
                                       stoelNr = s.StoelNr,
                                       stoelId = rs.StoelId,
                                       voorstellingId = rs.VoorstellingId,
                                   };

        string json = JsonConvert.SerializeObject(queryBetaaldeStoelen);

        return Ok(queryBetaaldeStoelen);
    }

    [HttpGet("voorstellingInfo/{id}")]
    public async Task<ActionResult<IEnumerable<Zaal>>> getVoorstellingInfo(int id)
    {
        var Voorstelling = await _context.Voorstelling.ToListAsync();

        if (Voorstelling == null)
        {
            return NotFound();
        }

        var queryVoorstellingInfo = from v in Voorstelling
                                    where v.VoorstellingId == id
                                    select new
                                    {
                                        voorstellingid = v.VoorstellingId,
                                        titel = v.Titel,
                                        beschrijving = v.Beschrijving,
                                        tijd = v.Tijd,
                                        prijs = v.Prijs
                                    };

        if (Voorstelling == null)
        {
            return NotFound();
        }


        string json = JsonConvert.SerializeObject(queryVoorstellingInfo);

        return Ok(queryVoorstellingInfo);
    }}



//     [HttpGet("voorstellingInfo/{id}")]
//     public async Task<ActionResult<IEnumerable<Zaal>>> bestellingToCart(int id, Voorstelling voorstelling)
//     {

//         return Ok();
//     }


// }
