using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Authentication
{
    public class RegisterModel
    {
        [BindProperty]
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }
        [BindProperty]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }
        [BindProperty]
        [Required(ErrorMessage = "Password is required")]
        public string Password{ get; set; }
        
    }
}
