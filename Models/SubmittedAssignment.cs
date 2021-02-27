using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    public class SubmittedAssignment
    {
        [Key]
        public int Id { get; set; }
        public int UserId{ get; set; }
        public UserDetails User { get; set; }
        public int AssignmentId { get; set; }
        public int File { get; set; }
        public Assignment Assignment { get; set; }
    }
}
