using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheaterLaakAPi.Models;

public class Zaal
{
    [Key]
    public int ZaalId { get; set; }
    public string? Title { get; set; }
    public string? SoortZaal { get; set; }

    
    public List<Rang>? Rangen { get; set; }
    public List<Voorstelling>? Voorstellingen { get; set; }





}
