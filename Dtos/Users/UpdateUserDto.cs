using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Dtos.Users
{
    public class UpdateUserDto
    {
        
       
        public string Fullname { get; set; }

        public string Gender { get; set; }
        public int IntakeId { get; set; }
        public Intake Intake;
        
        
       
        public string Image { get; set; }

        public string User_role{ get; set; }
        public string Last_loggedin_date { get; set; }

    }
}
