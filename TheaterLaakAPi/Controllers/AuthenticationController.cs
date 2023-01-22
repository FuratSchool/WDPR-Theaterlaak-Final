using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using TheaterLaakAPi.Models;
using TheaterLaakAPi.Models.Authentication;
using TheaterLaakAPi.Services;

namespace TheaterLaakAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly JwtTokenService _jwtTokenService;

        public AuthenticationController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IConfiguration configuration,
            JwtTokenService jwtTokenService
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _jwtTokenService = jwtTokenService;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(UserRegister userRegister)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser
                {
                    Email = userRegister.Email,
                    UserName = userRegister.UserName,
                    PasswordHash = userRegister.Password,
                    Voornaam = userRegister.Voornaam,
                    Achternaam = userRegister.Achternaam,
                };
                var result = await _userManager.CreateAsync(user, user.PasswordHash);
                return result.Succeeded ? StatusCode(201) : new BadRequestObjectResult(result);
            }
            return BadRequest("Bad credentials");
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(UserLogin userLogin)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(userLogin.Email);
                var result = await _userManager.CheckPasswordAsync(user, userLogin.Password);

                if (user != null && result)
                {
                    await _signInManager.SignInAsync(user, true);
                    Console.WriteLine("User Logged in");
                    var userRoles = await _userManager.GetRolesAsync(user);
                    string token = _jwtTokenService.GenerateJWTToken(
                        (Id: user.Id, UserName: user.UserName, roles: userRoles)
                    );
                    return Ok(new { Token = token });
                }
            }
            return BadRequest("Bad credentials");
        }
    }
}
