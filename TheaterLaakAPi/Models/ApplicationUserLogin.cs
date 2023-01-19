using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models
{
    public class UserLogin
    {
        public string? Email { get; init; }

        public string? Password { get; init; }
    }
}
