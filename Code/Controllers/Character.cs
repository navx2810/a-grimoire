using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Grimoire.Filters;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Grimoire.Controllers
{
    // [UserTokenAuth]
    [Route("character")]
    public class Character : Controller
    {
        [HttpGet("mine")]
        public List<Grimoire.Models.Character> GetMyCharacters(GrimoireContext db) {
            string user = this.Request.Cookies["auth"];
            return db.Characters.Where(c => c.User.Equals(user)).ToList();
        }
        
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            string token = Grimoire.Util.CreateToken(id);
            return Ok(Grimoire.Util.ReadToken(token));
        }

        [HttpPost]
        public IActionResult Post([FromBody]CharacterTFR character, GrimoireContext db)
        {
            if(!ModelState.IsValid) { return BadRequest(ModelState); }
            string user = Request.Cookies["auth"];
            return BadRequest("your bad");
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]CharacterTFR value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class CharacterTFR {
        public int Id { get; set; }
        [Required]
        public string User { get; set; }
        [Required]
        public string Meta { get; set; }
    }
}
