using System.ComponentModel.DataAnnotations;

namespace TheaterLaakAPi.Models
{
    public class User
    {
        [Key]
        public int Id {get;set;}
        [Required]
        public string? UserName{ get; set; }

        [Required]
        public string? Password { get; set; }

        public string? Email { get; set; }
        public int? GroepID{get; set;}

        public Groepen? Groepen { get; set; }

    }

  
}
