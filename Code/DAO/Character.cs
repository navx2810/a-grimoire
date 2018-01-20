using System.ComponentModel.DataAnnotations;

namespace Grimoire.DAO {
    public class Character {
        public class DAO {
            public int Id { get; set; }
            [Required]
            public string User { get; set; }
            [Required]
            public string Meta { get; set; }
        }

        public static Character.DAO findCharacterById(int id) {
            return null;
        }
    }
}