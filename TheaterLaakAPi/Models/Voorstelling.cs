namespace TheaterLaakAPi.Models;

public class Voorstelling
{

    public int Id { get; set; }
    public string? Title { get; set; }

    public string? Genre { get; set; }

    public string? Description { get; set; }

    public int ImageId { get; set; }

    public DateTime Datum { get; set; }

    public int prijs { get; set; }

}