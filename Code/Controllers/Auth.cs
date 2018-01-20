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
    [Route("auth")]
    public class Auth : Controller
    {
        [HttpGet]
        IActionResult Get() {
            return Ok("I'm hjere");
        }
        [HttpPost]
        IActionResult getToken([FromBody] string code) {
            return Ok(code);
        }
    }

}
