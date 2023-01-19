using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TheaterLaakAPi.Models;
using TheaterLaakAPi.Models.Authentication;
using TheaterLaakAPi.Services;
using Microsoft.AspNetCore.Authorization;

namespace TheaterLaakAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;

        private readonly JwtService _jwtService;

        public UserController(
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager,
            JwtService jwtService
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtService = jwtService;
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
                var result = await _signInManager.PasswordSignInAsync(
                    userLogin.Email,
                    userLogin.Password,
                    false,
                    false
                );

                if (result.Succeeded)
                {
                    Console.WriteLine("User Logged in");
                    return Ok();
                }
            }
            return Unauthorized();
        }

        // POST: api/User/BearerToken
        [HttpPost("BearerToken")]
        public async Task<ActionResult<AuthenticationResponse>> CreateBearerToken(
            AuthenticationRequest request
        )
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Bad credentials");
            }

            var user = await _userManager.FindByNameAsync(request.UserName);

            if (user == null)
            {
                return BadRequest("Bad credentials");
            }

            var isPasswordValid = await _userManager.CheckPasswordAsync(user, request.Password);

            if (!isPasswordValid)
            {
                return BadRequest("Bad credentials");
            }

            var token = _jwtService.CreateToken(user);

            return Ok(token);
        }
    }
}
