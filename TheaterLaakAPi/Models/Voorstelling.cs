namespace TheaterLaakAPi.Models;
using System.ComponentModel.DataAnnotations;

public class Voorstelling
{
    public int Id { get; set; }

    [Required]
    public string? Title { get; set; }

    [Required]
    public string? Genre { get; set; }

    [Required]
    public string? Description { get; set; }

    public int ImageId { get; set; }

    public DateTime Datum { get; set; }
}
