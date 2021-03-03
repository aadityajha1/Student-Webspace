using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    
    public class UserDetails
    {
        [Key]
        public int Id { get; set; }
        [BindProperty]
        [Required]
        public string Fullname{ get; set; }
        [BindProperty]
        public string Gender{ get; set; }
        [BindProperty]
        public int IntakeId { get; set; }
        public Intake Intake;
        [Required]
        [BindProperty]
        public string Email { get; set; }
        [BindProperty]
        [Required]
        public string Password { get; set; }
        [BindProperty]
        public string Image{ get; set; }
        [BindProperty]
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }
        [BindProperty]
        public string User_role{ get; set; }
        [BindProperty]
        public string Enrolled_date { get; set; }
        [BindProperty]
        public string Last_loggedin_date{ get; set; }
        
        public List<Result> Results { get; set; }
        public List<SubmittedAssignment> SubmittedAssignments { get; set; }
        public Fees Fees { get; set; }

    }
}
