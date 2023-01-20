using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheaterLaakAPi.Models;

public class Stoel
{
    [Key]
    public int StoelId { get; set; }
    public int? StoelNr { get; set; }
    public int? invalide { get; set; }


    
    public int? RangId{ get; set; }
    public Rang? Rang { get; set; }


}
