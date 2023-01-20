using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace TheaterLaakAPi.Models;

public class ApplicationUser : IdentityUser
{   
    public string? Voornaam { get; set; }
    public string? Achternaam { get; set; }

    public ICollection<Reservering>? Reserveringen { get; set; }


    
    

}
