using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.Controllers;

public class PlaatsBestellingController : ControllerBase
{
    private readonly DatabaseContext _context;
    private readonly UserManager<ApplicationUser> _userManager;

    public PlaatsBestellingController(
        UserManager<ApplicationUser> userManager,
        DatabaseContext context
    )
    {
        _userManager = userManager;
        _context = context;
    }

    private Task<ApplicationUser> GetCurrentUserAsync() =>
        _userManager.GetUserAsync(HttpContext.User);

    [HttpGet("toCart/{vid}/{sid}/{uid}")]
    public async Task<ActionResult<Reservering>> toCart(int vid, int sid, string uid)
    {
        int getResId = _context.Reserveringen
            .Where(x => x.StoelId == sid && x.VoorstellingId == vid)
            .Select(x => x.ReserveringId)
            .FirstOrDefault();

        Reservering res = new Reservering();
        ApplicationUser user = await GetCurrentUserAsync();

        res.ReserveringId = getResId;
        res.ApplicationUser = user;
        res.ApplicationUserId = uid;
        //tijd om bestelling te bevestigen
        res.ReserveringsDatum = DateTime.Now.AddSeconds(300);
        res.VoorstellingId = vid;
        res.StoelId = sid;
        res.isBetaald = 0;

        //remove old one
        if (_context.Reserveringen == null)
        {
            return NotFound();
        }

        var reservering = await _context.Reserveringen.FindAsync(getResId);
        if (reservering == null)
        {
            return NotFound();
        }

        _context.Reserveringen.Remove(reservering);

        // add new one

        if (_context.Reserveringen == null)
        {
            return Problem("Entity set 'DatabaseContext.Rang'  is null.");
        }

        _context.Reserveringen.Add(res);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpGet]
    [Route("beschikbarestoelen/{id}")]
    public async Task<ActionResult<IEnumerable<Reservering>>> getBeschikbareStoelen(int id)
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

        var queryBetaaldeStoelen =
            from rs in Reservering
            from s in Stoel
            from v in Voorstelling
            where s.StoelId == rs.StoelId
            where rs.VoorstellingId == v.VoorstellingId
            where rs.VoorstellingId == id
            where rs.isBetaald == 0
            where rs.ReserveringsDatum < DateTime.Now
            select new
            {
                rangNr = s.RangId,
                stoelNr = s.StoelNr,
                stoelId = rs.StoelId,
                voorstellingId = rs.VoorstellingId,
            };

        if (queryBetaaldeStoelen == null)
        {
            return NotFound();
        }

        string json = JsonConvert.SerializeObject(queryBetaaldeStoelen);

        return Ok(queryBetaaldeStoelen);
    }

    [HttpGet("voorstellingInfo/{id}")]
    public async Task<ActionResult<IEnumerable<Reservering>>> getVoorstellingInfo(int id)
    {
        var Voorstelling = await _context.Voorstelling.ToListAsync();

        if (Voorstelling == null)
        {
            return NotFound();
        }

        var queryVoorstellingInfo =
            from v in Voorstelling
            where v.VoorstellingId == id
            select new
            {
                voorstellingid = v.VoorstellingId,
                titel = v.Title,
                beschrijving = v.Description,
                tijd = v.Tijd,
                prijs = v.Prijs
            };

        if (queryVoorstellingInfo == null)
        {
            return NotFound();
        }

        string json = JsonConvert.SerializeObject(queryVoorstellingInfo);

        return Ok(queryVoorstellingInfo);
    }

    [HttpGet]
    [Route("getReservering/{uid}")]
    public async Task<ActionResult<IEnumerable<Reservering>>> GetReserveringInCart(string uid)
    {
        if (_context.Reserveringen == null)
        {
            return NotFound();
        }

        if (_context.Stoelen == null)
        {
            return NotFound();
        }

        if (_context.Rangen == null)
        {
            return NotFound();
        }

        if (_context.Zaal == null)
        {
            return NotFound();
        }

        if (_context.Voorstelling == null)
        {
            return NotFound();
        }

        var reservering = await _context.Reserveringen.ToListAsync();
        var stoel = await _context.Stoelen.ToListAsync();
        var rang = await _context.Rangen.ToListAsync();
        var zaal = await _context.Zaal.ToListAsync();
        var voorstelling = await _context.Voorstelling.ToListAsync();

        var query = (
            from rs in reservering
            from s in stoel
            from r in rang
            from z in zaal
            from v in voorstelling
            where rs.ApplicationUserId == uid
            where rs.StoelId == s.StoelId
            where r.RangId == s.RangId
            where z.ZaalId == r.ZaalId
            where v.ZaalId == z.ZaalId
            where rs.VoorstellingId == v.VoorstellingId //
            where rs.isBetaald == 0
            select new
            {
                zaal = z.Title,
                rang = r.RangNr,
                stoelNr = s.StoelNr,
                stoelId = s.StoelId,
                voorstelling = v.Title,
                reserveringId = rs.ReserveringId,
                datum = v.Datum, //
                userId = uid,
                prijs = v.Prijs
            }
        ).DistinctBy(x => x.reserveringId);

        return Ok(query);
    }

    [HttpGet]
    [Route("betaalCart/{uid}/{vid}/{sid}")]
    public async Task<ActionResult<IEnumerable<Reservering>>> betaalCart(
        string uid,
        int vid,
        int sid
    )
    {
        int getResId = _context.Reserveringen
            .Where(x => x.StoelId == sid && x.VoorstellingId == vid)
            .Select(x => x.ReserveringId)
            .FirstOrDefault();

        //remove old one
        if (_context.Reserveringen == null)
        {
            return NotFound();
        }

        var reservering = await _context.Reserveringen.FindAsync(getResId);

        if (reservering == null)
        {
            return NotFound();
        }

        _context.Reserveringen.Remove(reservering);

        // add new one


        Reservering res = new Reservering();

        ApplicationUser user = await GetCurrentUserAsync();
        res.ReserveringId = getResId;
        res.ApplicationUser = user;
        res.ApplicationUserId = uid;
        res.ReserveringsDatum = DateTime.Now;
        res.VoorstellingId = vid;
        res.StoelId = sid;
        res.isBetaald = 1;

        if (_context.Reserveringen == null)
        {
            return Problem("Entity set 'DatabaseContext.Rang'  is null.");
        }

        _context.Reserveringen.Add(res);
        await _context.SaveChangesAsync();

        return Ok();
    }

    [HttpGet("maakReserveringBijVoorstelling/{vid}")]
    public async Task<
        ActionResult<IEnumerable<Reservering>>
    > maakReserveringenBijNieuweVoorstelling(int vid)
    {
        var reservering = await _context.Reserveringen.ToListAsync();

        var aantalReserveringenVoorstelling = (
            from rs in reservering
            where rs.VoorstellingId == vid
            select new { voorstellingId = rs.VoorstellingId }
        ).Count();

        if (aantalReserveringenVoorstelling != 0)
        {
            return NotFound();
        }

        var stoel = await _context.Stoelen.ToListAsync();
        var rang = await _context.Rangen.ToListAsync();
        var zaal = await _context.Zaal.ToListAsync();
        var voorstelling = await _context.Voorstelling.ToListAsync();

        var query = (
            from rs in reservering
            from s in stoel
            from r in rang
            from z in zaal
            from v in voorstelling
            where v.VoorstellingId == vid
            where z.ZaalId == v.ZaalId
            where r.ZaalId == z.ZaalId
            where s.RangId == r.RangId
            select new { stoelId = s.StoelId }
        )
            .Distinct()
            .ToList();

        if (query == null)
        {
            return NotFound();
        }

        var getlaatsteReserveringNummer = reservering.Select(x => x.ReserveringId).ToList().Max();
        int laatsteResnummer = getlaatsteReserveringNummer;

        if (aantalReserveringenVoorstelling == 0)
        {
            foreach (var item in query)
            {
                laatsteResnummer++;
                Reservering res = new Reservering
                {
                    ReserveringId = laatsteResnummer,
                    isBetaald = 0,
                    StoelId = item.stoelId,
                    VoorstellingId = vid,
                    ReserveringsDatum = DateTime.Now
                };
                _context.Reserveringen.Add(res);
                await _context.SaveChangesAsync();
            }
        }
        else
        {
            return NotFound();
        }
        //  where rs.ApplicationUserId == uid
        //  where rs.StoelId == s.StoelId
        //  where r.RangId == s.RangId
        //  where z.ZaalId == r.ZaalId
        //  where v.ZaalId == z.ZaalId
        //  where rs.VoorstellingId == v.VoorstellingId //
        //  where rs.isBetaald == 0

        return Ok(aantalReserveringenVoorstelling);
    }
}



// [HttpPost]
// [Route("reservering/toCart")]
// public async Task<IActionResult> postPlaatsBestelling(int vid, int sid, string uid)
// {

//     (from rs in _context.Reserveringen
//      where rs.VoorstellingId == vid
//      where rs.StoelId == sid
//      select rs).ToList()
//      .ForEach(x => x.ApplicationUserId = uid && x.ReserveringId == ReserveringId);

//     _context.SaveChanges();



//     return Ok();
// }


// [HttpPost]
// [Route("reservering/toCart")]
// public async Task<IActionResult> putPlaatsBestelling( int vid, int sid, string uid)
// {
//     var reserveringToUpdate= await _context.Reserveringen.FirstOrDefaultAsync(rs => rs.VoorstellingId == vid && rs.StoelId == sid);

//         if (await TryUpdateModelAsync<Reservering>(
//     reserveringToUpdate,
//     "",
//     rs => rs.ApplicationUserId))
// {
//     try
//     {
//         reserveringToUpdate.ApplicationUserId = uid;
//         await _context.SaveChangesAsync();
//         return RedirectToAction(nameof(Index));
//     }
//     catch (DbUpdateException /* ex */)
//     {
//         //Log the error (uncomment ex variable name and write a log.)
//         ModelState.AddModelError("", "Unable to save changes. " +
//             "Try again, and if the problem persists, " +
//             "see your system administrator.");
//             return NotFound();
//     }

// }
//    return Ok();
// }

// [HttpPut]
// [Route("reservering/toCart")]

// public async Task<ActionResult<IEnumerable<Reservering>>> bestellingToCart(int vid, int sid, string uid)
// {

//     if (_context.Reserveringen == null)
//     {
//         return NotFound();
//     }

//     var Reservering = await _context.Reserveringen.ToListAsync();

//     if (Reservering == null)
//     {
//         return NotFound();
//     }



//     Reservering result = (from rs in _context.Reserveringen
//                           where rs.StoelId == sid
//                           where rs.VoorstellingId == vid
//                           select rs).SingleOrDefault();

//     if (result == null)
//     {
//         return NotFound();
//     }

//     result.ApplicationUserId = uid;
//         _context.SaveChanges();

//         return Ok(result);
// }
