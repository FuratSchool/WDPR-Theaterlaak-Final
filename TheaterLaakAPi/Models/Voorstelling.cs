using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models;
using System.ComponentModel.DataAnnotations;

public class Voorstelling
{
    public int VoorstellingId { get; set; }
    public string Title { get; set; }

    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
    public DateTime Tijd { get; set; }
    public string Description { get; set; }
    public double Prijs { get; set; }

    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
    public DateTime StartDatum { get; set; }
    public DateTime EindDatum { get; set; }

    public int? ZaalId { get; set; }
    public Zaal? Zaal { get; set; }

    public ICollection<Reservering>? Reserveringen { get; set; }
    public ICollection<Groep>? Groepen { get; set; }
}
