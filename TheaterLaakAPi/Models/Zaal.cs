namespace TheaterLaakAPi.Models;

public class Zaal
{
    public int Id { get; set; }
    public string Title { get; set; }
    public ICollection<Rang> Rangen { get; set; }
    public ICollection<Voorstelling>? Voorstellingen { get; set; }
}
