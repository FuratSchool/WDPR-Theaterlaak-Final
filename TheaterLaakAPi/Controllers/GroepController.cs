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
        
    [HttpPost]
        public async Task<ActionResult<Groep>> PostGroep(GroepArtistViewModel viewModel)
        {
            if (_context.Groepen == null)
            {
                return Problem("Entity set 'DBContext.Groep'  is null.");
            }
            Console.WriteLine(viewModel.UserId);

            //ApplicationUser user = await _userManager.FindByIdAsync(viewModel.UserId);

            var groepResult = new Groep
            {
                GroepNaam = viewModel.GroepNaam,
                BandWebsite = viewModel.BandWebsite,
                LogoLink = viewModel.LogoLink,
            };

            _context.Groepen.Add(groepResult);
            await _context.SaveChangesAsync();

            return Ok(groepResult);
        }
}
    }


public class GroepArtistViewModel
{
    public string GroepNaam { get; set; }

    public string? UserId { get; set; }

    public string? BandWebsite { get; set; }
    public string? LogoLink { get; set; }
}