using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    public class Intake
    {   
        [Key]
        public int Id { get; set; }
        public int CourseId { get; set; }
        public Course Course{ get; set; }
        [Required]
        public string Name { get; set; }
        public List<User> Users { get; set; }
    }
}
