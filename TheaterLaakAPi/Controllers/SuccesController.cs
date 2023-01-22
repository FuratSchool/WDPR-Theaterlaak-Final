// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using Newtonsoft.Json;

// namespace TheaterLaakAPi.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class SuccesController : ControllerBase
//     {
//         private readonly DatabaseContext _context;

//         public SuccesController(DatabaseContext context)
//         {
//             _context = context;
//         }

//         // GET: api/Succes
//         [HttpGet]
//         public async Task<ActionResult<IEnumerable<Succes>>> GetSucces()
//         {
//             if (_context.Succes == null)
//             {
//                 return NotFound();
//             }
//             return await _context.Succes.ToListAsync();
//         }

//         // GET: api/Succes/5
//         [HttpGet("{id}")]
//         public async Task<ActionResult<Succes>> GetSucces(int id)
//         {
//             if (_context.Succes == null)
//             {
//                 return NotFound();
//             }
//             var succes = await _context.Succes.FindAsync(id);

//             if (succes == null)
//             {
//                 return NotFound();
//             }

//             return succes;
//         }

//         // PUT: api/Succes/5
//         // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//         [HttpPut("{id}")]
//         public async Task<IActionResult> PutSucces(int id, Succes succes)
//         {
//             if (id != succes.id)
//             {
//                 return BadRequest();
//             }

//             _context.Entry(succes).State = EntityState.Modified;

//             try
//             {
//                 await _context.SaveChangesAsync();
//             }
//             catch (DbUpdateConcurrencyException)
//             {
//                 if (!SuccesExists(id))
//                 {
//                     return NotFound();
//                 }
//                 else
//                 {
//                     throw;
//                 }
//             }

//             return NoContent();
//         }

//         // POST: api/Succes
//         // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//         [HttpPost]
//         [Consumes("application/x-www-form-urlencoded")]
//         public async Task<ActionResult<Succes>> PostSucces([FromForm] string reference, bool gelukt)
//         {
//             // Succes succes = JsonConvert.DeserializeObject<Succes>(ducces);
//             if (_context.Succes == null)
//             {
//                 return Problem("Entity set 'DatabaseContext.Succes'  is null.");
//             }
//             Succes succes = new Succes();
//             succes.reference = reference;
//             _context.Succes.Add(succes);
//             await _context.SaveChangesAsync();
//             return Redirect("http://localhost:3000/Succes");
//             // return CreatedAtAction("GetSucces", new { id = succes.id }, succes);
//         }

//         // DELETE: api/Succes/5
//         [HttpDelete("{id}")]
//         public async Task<IActionResult> DeleteSucces(int id)
//         {
//             if (_context.Succes == null)
//             {
//                 return NotFound();
//             }
//             var succes = await _context.Succes.FindAsync(id);
//             if (succes == null)
//             {
//                 return NotFound();
//             }

//             _context.Succes.Remove(succes);
//             await _context.SaveChangesAsync();

//             return NoContent();
//         }

//         private bool SuccesExists(int id)
//         {
//             return (_context.Succes?.Any(e => e.id == id)).GetValueOrDefault();
//         }
//     }
// }
