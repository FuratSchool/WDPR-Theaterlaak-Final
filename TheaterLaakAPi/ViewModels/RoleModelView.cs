using System.ComponentModel.DataAnnotations;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.ViewModels
{
    public class RoleModelView
    {
        public string Email { get; set; }
        public string? Role { get; set; }
    }
}
