using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Authentication
{
    public class LoginModel
    {
        [BindProperty]
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }
        [BindProperty]
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
