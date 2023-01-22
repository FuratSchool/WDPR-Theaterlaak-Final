using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models;

public class Groepen
{
    [Key]
    public int GroepID { get; set; }
    public string? bandnaam { get; set; }
    public string? website  { get; set; }
    public string? Logo { get; set; }  //logo path 

    public ICollection<User>? Users {get; set;}
}

