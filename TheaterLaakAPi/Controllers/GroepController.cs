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

        public GroepController(DatabaseContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
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

        [HttpGet("{id}")]
        public async Task<ActionResult<Groep>> GetGroupById(int id)
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

            return await _context.Groepen.FindAsync(id);
        }

        // POST: api/Groep
        [HttpPost]
        public async Task<ActionResult<Groep>> PostGroep(GroepArtistViewModel viewModel)
        {
            if (_context.Groepen == null)
            {
                return Problem("Entity set 'DBContext.Groep'  is null.");
            }

            var groep = new Groep
            {
                GroepNaam = viewModel.GroepNaam,
                BandWebsite = viewModel.BandWebsite,
                LogoLink = viewModel.LogoLink,
            };

            _context.Groepen.Add(groep);

            await _context.SaveChangesAsync();

            return Ok(groep.Artiesten);
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

public class GroepArtistViewModel
{
    public string GroepNaam { get; set; }

    public string UserId { get; set; }

    public string? BandWebsite { get; set; }
    public string? LogoLink { get; set; }
}
