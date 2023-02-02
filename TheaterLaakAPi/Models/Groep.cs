using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models;

public class Groep
{
    [Key]
    public int GroepId { get; set; }
    public string GroepNaam { get; set; }

    public string? BandWebsite { get; set; }
    public string? LogoLink { get; set; }

    public ICollection<ApplicationUser>? Artiesten { get; set; }
    public ICollection<Voorstelling>? Voorstellingen { get; set; }
}
