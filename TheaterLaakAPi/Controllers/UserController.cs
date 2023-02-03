using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using TheaterLaakAPi.Models;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Net.Http.Headers;
using System.Linq;
using TheaterLaakAPi.ViewModels;

namespace TheaterLaakAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly DatabaseContext _context;

        public UserController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            DatabaseContext context
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetAllUsers()
        {
            var users = await _userManager.Users.ToListAsync();
            if (users == null)
            {
                return NotFound();
            }
            return Ok(users);
        }

        // GET: api/User/username
        [HttpGet("Account")]
        [Authorize]
        public async Task<ActionResult<ApplicationUser>> GetUser()
        {
            //REFRACTORING
            ApplicationUser result = await _userManager.FindByNameAsync(
                HttpContext.User.Identity.Name
            );
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPost("AddMedewerkerRole")]
        public async Task<ActionResult<Groep>> GrantMedewerkerRole(RoleModelView viewModel)
        {
            var user = await _userManager.FindByEmailAsync(viewModel.Email);

            await _userManager.AddToRoleAsync(user, "Medewerker");

            await _userManager.UpdateAsync(user);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPost("AddArtiestRole")]
        public async Task<ActionResult<Groep>> GrantArtiestRole(RoleModelView viewModel)
        {
            var user = await _userManager.FindByEmailAsync(viewModel.Email);

            await _userManager.AddToRoleAsync(user, "Artiest");

            await _userManager.UpdateAsync(user);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
