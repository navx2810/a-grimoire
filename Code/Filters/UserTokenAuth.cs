using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Grimoire.Filters
{

/// <summary>
/// Checks the cookie for "auth" and returns a 401 if it's not set. Place it on a controller or route to prevent a non-user from accessing it.
/// </summary>
    public class UserTokenAuth : Attribute, IActionFilter
    {
        /// <summary>
        /// Checks to see if the user has the cookie labeled 'auth'
        /// </summary>
        /// <param name="context"></param>
        void IActionFilter.OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.HttpContext.Request.Cookies.ContainsKey("auth"))
            {
                context.Result = BadLoginRequest();
            }
        }

        private IActionResult BadLoginRequest() => new UnauthorizedResult();

        public void OnActionExecuted(ActionExecutedContext context)
        {
        }
    }
}
