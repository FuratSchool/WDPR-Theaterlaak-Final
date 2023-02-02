using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TheaterLaakAPi.Models
{
    public class ArtiestGroep
    {
        public string? UserId { get; set; }

        [ForeignKey("UserId")]
        public ApplicationUser? Artiest { get; set; }

        public int? GroepId { get; set; }

        [ForeignKey("GroepId")]
        public Groep? groep { get; set; }
    }
}
