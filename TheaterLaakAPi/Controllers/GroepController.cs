using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroepController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly DatabaseContext _context;

        public GroepController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Groep
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Groep>>> GetGroep()
        {
            if (_context.Groepen == null)
            {
                return NotFound();
            }
            return await _context.Groepen.ToListAsync();
        }

        // POST: api/Groep
        [HttpPost]
        public async Task<ActionResult<Groep>> PostGroep(Groep groep)
        {
            if (_context.Groepen == null)
            {
                return Problem("Entity set 'DBContext.Groep'  is null.");
            }
            //   ApplicationUser? result = await _userManager.FindByEmailAsync(
            //         HttpContext.User.Identity.Name
            //     );

            _context.Groepen.Add(groep);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGroep), new { id = groep.GroepId }, groep);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGroep(int id)
        {
            if (_context.Groepen == null)
            {
                return NotFound();
            }
            var groep = await _context.Groepen.FindAsync(id);
            if (groep == null)
            {
                return NotFound();
            }

            _context.Groepen.Remove(groep);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
