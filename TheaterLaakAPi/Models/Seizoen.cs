using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models;

public class Seizoen
{
    public int SeizoenId { get; set; }
    public int SeizoensNr { get; set; }

    public string Title { get; set; }

    [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
    public DateTime StartDatum { get; set; }
    public DateTime EindDatum { get; set; }

    public ICollection<Voorstelling> Voorstellingen { get; set; }
}
