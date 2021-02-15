using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    public class Results
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "User Id is required")]
        [ForeignKey("UserDetails")]
        public int UserId { get; set; }
        public UserDetails User{ get; set; }
        [ForeignKey("Intake")]
        public int IntakeId { get; set; }
        public Intake Intake{ get; set; }
        
        public int ModuleId { get; set; }
        public Module Module { get; set; }
        [Required(ErrorMessage = "grade is required")]
        public string Grade { get; set; }

        [Required(ErrorMessage = "Published Date is Required")]
        public string PublishDate { get; set; }
    }
}
