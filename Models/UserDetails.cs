using Microsoft.AspNetCore.Http;
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
        [Required]
        public string Fullname{ get; set; }

        public string Gender{ get; set; }
        public int IntakeId { get; set; }
        public Intake Intake;
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string Image{ get; set; }
        
        public string User_role{ get; set; }
        public string Enrolled_date { get; set; }
        public string Last_loggedin_date{ get; set; }

        public List<Result> Results { get; set; }
        public List<SubmittedAssignment> SubmittedAssignments { get; set; }
        public Fees Fees { get; set; }

    }
}
