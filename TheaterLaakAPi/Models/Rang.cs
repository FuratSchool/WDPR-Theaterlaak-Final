namespace TheaterLaakAPi.Models;

public class Rang
{
    public int RangId { get; set; }
    public int RangNr { get; set; }
    public int Capiciteit { get; set; }

     public ICollection<Stoel> Stoelen { get; set; }

     public int ZaalId { get; set; }
     public Zaal Zaal { get; set; }


}