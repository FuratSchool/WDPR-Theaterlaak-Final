namespace TheaterLaakAPi.Models;

public class Reservering
{  
    public int ReserveringId { get; set; }
    public DateTime ReserveringsDatum { get; set; }
    public int isBetaald { get; set; }

    public ICollection<Stoel> Stoelen { get; set; }

    public int ApplicationUserId { get; set; }
    public ApplicationUser ApplicationUser { get; set; }

    public int VoorstellingId { get; set; }
    public Voorstelling Voorstelling { get; set; }


}