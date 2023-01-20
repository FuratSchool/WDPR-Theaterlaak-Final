

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TheaterLaakAPi.Models;

public class Voorstelling {
        [Key]
        public int VoorstellingId { get; set; }
        public string? Title { get; set; }

        public string? Genre {get;set;}

        public string? Description {get; set;}

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString="{0:yyyy-MM-dd}", ApplyFormatInEditMode=true)]
        public DateTime? Datum {get; set;}

        public int? ZaalId { get; set; }
        public Zaal? Zaal { get; set; }


}