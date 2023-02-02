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
    public class ArtiestGroupController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly DatabaseContext _context;

        public ArtiestGroupController(
            DatabaseContext context,
            UserManager<ApplicationUser> userManager
        )
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/ArtiestGroep
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ArtiestGroep>>> GetArtiestenInGroup(int id)
        {
            var artiestenInGroep = await _context.ArtiestGroeps
                .Where(ag => ag.GroepId == id)
                .Include(ag => ag.Artiest)
                .ToListAsync();

            if (artiestenInGroep == null)
            {
                return NotFound();
            }

            return artiestenInGroep;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtiestGroep(string id)
        {
            var artiestenInGroep = await _context.ArtiestGroeps
                .Where(ag => ag.UserId == id)
                .Include(ag => ag.Artiest)
                .FirstAsync();
            if (artiestenInGroep == null)
            {
                return NotFound();
            }

            _context.ArtiestGroeps.Remove(artiestenInGroep);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<IEnumerable<ArtiestGroep>>> UpdateBand(int id)
        {
            var groep = await _context.Groepen.FindAsync(id);
            if (groep == null)
            {
                return NotFound();
            }

            _context.Entry(groep).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroepExists(id))
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

        private bool GroepExists(int id)
        {
            return (_context.Groepen?.Any(e => e.GroepId == id)).GetValueOrDefault();
        }

        [HttpPost]
        public async Task<ActionResult<ArtiestGroep>> AddUsersToGroup(ArtiestGroep artiestGroep)
        {
            if (_context.Groepen == null)
            {
                return Problem("Entity set 'DBContext.Groep'  is null.");
            }
            Console.WriteLine("groepId:", artiestGroep.GroepId);
            Console.WriteLine("userId:", artiestGroep.UserId);
            var groep = await _context.Groepen.FindAsync(artiestGroep.GroepId);
            ApplicationUser user = await _userManager.FindByIdAsync(artiestGroep.UserId);

            var groepResult = new ArtiestGroep
            {
                GroepId = artiestGroep.GroepId,
                groep = groep,
                UserId = artiestGroep.UserId,
                Artiest = user
            };

            _context.ArtiestGroeps.Add(groepResult);

            await _context.SaveChangesAsync();

            return Ok(groepResult);
        }
    }
}
