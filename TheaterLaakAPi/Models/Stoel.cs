namespace TheaterLaakAPi.Models;

public class Stoel
{
    public int Id { get; set; }
    public int StoelNr { get; set; }
    public int isInvalide { get; set; }

    public int RangId { get; set; }
    public Rang Rang { get; set; }
}
