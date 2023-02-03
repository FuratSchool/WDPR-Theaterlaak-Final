using System.ComponentModel.DataAnnotations;
using TheaterLaakAPi.Models;

namespace TheaterLaakAPi.ViewModels
{
    public class VoorstellingModelView
    {
        public int ZaalId { get; set; }
        public int GroepId { get; set; }

        public string Title { get; set; }

        [Required]
        public string Genre { get; set; }

        public double? Prijs { get; set; }

        [Required]
        public string Description { get; set; }

        public int? ImageId { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}")]
        public DateTime Datum { get; set; }

        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:hh//mm}")]
        public string Tijd { get; set; }
    }
}
