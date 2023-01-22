using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TheaterLaakAPi.Models;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Net.Http.Headers;

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

        // GET: api/User/username
        [HttpGet("Account")]
        [Authorize]
        public async Task<ActionResult<ApplicationUser>> GetUser()
        {
            ApplicationUser? result = await _userManager.FindByNameAsync(
                HttpContext.User.Identity.Name
            );
            if (result == null)
            {
                return NotFound();
            }

            var user = new ApplicationUser
            {
                Email = result.Email,
                UserName = result.UserName,
                Voornaam = result.Voornaam,
                Achternaam = result.Achternaam
            };
            return Ok(user);
        }
    }
}
