using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models;

public class Reservering
    {
    [Key]    public int reserveringId { get; set; }
    public DateTime ReserveringsDatum { get; set; }
    public int isBetaald { get; set; }

    public int StoelId { get; set; }
    public Stoel Stoel { get; set; }

    public int ApplicationUserId { get; set; }
    public ApplicationUser ApplicationUser { get; set; }

    public int VoorstellingId { get; set; }
    public Voorstelling Voorstelling { get; set; }


}