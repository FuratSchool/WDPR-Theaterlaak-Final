namespace TheaterLaakAPi.Models;
using System.ComponentModel.DataAnnotations;

public class Voorstelling
{
    public int VoorstellingId { get; set; }

    [Required]
    public string? Title { get; set; }

    public double? Prijs { get; set; }

    public string? Genre { get; set; }

    [Required]
    public string? Description { get; set; }

    public int ImageId { get; set; }

    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
    public DateTime Datum { get; set; }

    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:hh\\mm}")]
    public string Tijd { get; set; }

    public int ZaalId { get; set; }
    public Zaal Zaal { get; set; }

    public int GroepId { get; set; }
    public Groep Groep { get; set; }
}
