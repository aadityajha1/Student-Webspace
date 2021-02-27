using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    public class Module
    {
        [Key]
        public int Id{ get; set; }
        [Required(ErrorMessage = "Module name is required")]
        public string Name { get; set; }
        public int CourseId { get; set; }
        public Course Course{ get; set; }
        public int IntakeId { get; set; }
        public Intake Intake{ get; set; }
        public string Semester{ get; set; }

        public Assignment Assignment { get; set; }
        public List<Result> Results { get; set; }
        public List<Notes> Notes { get; set; }
    }
}
