using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    public class Assignment
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Intake is required")]
        public int IntakeId { get; set; }
        public Intake Intake { get; set; }

        public int ModuleId { get; set; }
        public Module Module { get; set; }

        [Required(ErrorMessage = "Deadline is required")]
        public string Deadline { get; set; }

        public List<SubmittedAssignment> SubmittedAssignments { get; set; }
    }
}
