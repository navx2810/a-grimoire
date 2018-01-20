using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Grimoire.Models {
    public class Character {
        public int ID { get; set; }
        [Required]
        public string User { get; set; }
        [Required]
        private string meta;
        
        [NotMapped]
        public dynamic Meta {
            get { return JsonConvert.DeserializeObject(this.meta); }
            set { this.meta = JsonConvert.SerializeObject(value); }
        }
    }
}