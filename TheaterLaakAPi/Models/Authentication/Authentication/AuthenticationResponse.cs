using System;

namespace TheaterLaakAPi.Models.Authentication
{
    public class AuthenticationResponse
    {
        public string? Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
