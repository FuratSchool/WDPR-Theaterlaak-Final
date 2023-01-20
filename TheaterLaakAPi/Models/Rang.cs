using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheaterLaakAPi.Models;

public class Rang
{
    [Key]
    public int RangId { get; set; }
    public int? RangNr { get; set; }


    public int? ZaalId { get; set; }
    
    public Zaal? Zaal { get; set; }

    public List<Stoel>? Stoelen { get; set; }
    


}
