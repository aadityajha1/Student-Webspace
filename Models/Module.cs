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
        public string CourseId { get; set; }
        public Course Course{ get; set; }
        public string Semester{ get; set; }

        public List<Assignment> Assignments { get; set; }
        public List<Results> Results { get; set; }
    }
}
