using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models;

public class Zaal
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; }
    public ICollection<Rang>? Rangen { get; set; }
    //public ICollection<Voorstelling>? Voorstellingen { get; set; }
}
