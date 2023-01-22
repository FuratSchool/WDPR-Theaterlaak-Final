namespace TheaterLaakAPi.Models;
public class Groep
{
    public int GroepId { get; set; }
    public string? GroepNaam { get; set; }

    public string? BandWebsite { get; set; }
    public string? LogoLink { get; set; }

    public ICollection<Artiest>? Artiesten { get; set; }
    public ICollection<Voorstelling>? Voorstellingen { get; set; }
    


}