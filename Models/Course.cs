using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    public class Course
    {
        [Key]
        public int Id{ get; set; }
        [Required]
        public string Name{ get; set; }
        public List<Intake> Intakes { get; set; }
        public List<Module> Modules{ get; set; }
    }
}
