namespace TheaterLaakAPi.Models;

public class Artiest : ApplicationUser
{
    public ICollection<Groep>? Groepen { get; set; }

}