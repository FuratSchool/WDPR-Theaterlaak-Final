using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace TheaterLaakAPi.Services
{
    public class JwtTokenService
    {
        private readonly IConfiguration _configuration;

        public JwtTokenService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateJWTToken(
            (string Id, string UserName, IList<string> roles) userDetails
        )
        {
            var secret = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(
                    "awef98awef978haweof8g7aw789efhh789awef8h9awh89efh89awe98f89uawef9j8aw89hefawef"
                )
            );
            var signingCredentials = new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);

            var (Id, UserName, roles) = userDetails;

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Sub, UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Id),
                new Claim(ClaimTypes.Name, UserName),
                new Claim("Id", Id)
            };
            claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Issuer"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(60)),
                signingCredentials: signingCredentials
            );

            var encodedToken = new JwtSecurityTokenHandler().WriteToken(token);
            return encodedToken;
        }
    }
}
