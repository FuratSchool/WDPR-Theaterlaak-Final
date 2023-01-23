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

    // GET: api/Zaal
    [HttpGet]
    [Route("selectiestoelen/{id}")]

    public async Task<ActionResult<IEnumerable<Zaal>>> getVoorstellingInfo(int id)
    {

        var Stoel = await _context.Stoel.ToListAsync();
        var Rang = await _context.Rang.ToListAsync();
        var Zaal = await _context.Zaal.ToListAsync();
        var Voorstelling = await _context.Voorstelling.ToListAsync();


        var query = from s in Stoel
                    from r in Rang
                    from z in Zaal
                    from v in Voorstelling
                    where r.RangId == s.RangId
                    where z.ZaalId == r.ZaalId
                    where v.ZaalId == z.ZaalId
                    where v.VoorstellingId == id

                    select new
                    {   
                        rangNr = r.RangNr,
                        stoelNr = s.StoelNr,
                        stoelId = s.StoelId
                        
                    };
                    string json =  JsonConvert.SerializeObject(query);

        return Ok(json);
    }
    
    // // GET: api/Zaal
    // [HttpGet]
    // [Route("selectiestoelen/{id}")]

    // public async Task<ActionResult<IEnumerable<Zaal>>> getVoorstellingInfo(int id)
    // {

    //     var Stoel = await _context.Stoel.ToListAsync();
    //     var Rang = await _context.Rang.ToListAsync();
    //     var Zaal = await _context.Zaal.ToListAsync();
    //     var Voorstelling = await _context.Voorstelling.ToListAsync();


    //                 var query = from s in Stoel
    //                 from r in Rang
    //                 from z in Zaal
    //                 from v in Voorstelling
    //                 where r.RangId == s.RangId
    //                 where z.ZaalId == r.ZaalId
    //                 where v.ZaalId == z.ZaalId
    //                 where v.VoorstellingId == id
    //                 group r.RangNr by s.StoelNr into g

    //                 select new
    //                 {   
                        
    //                     RangNr = g.Key, StoelNr = g.ToList()
               
    //                 };

    //                 string json =  JsonConvert.SerializeObject(query);;

                    

    //     return Ok(query);
    // }
    




}
