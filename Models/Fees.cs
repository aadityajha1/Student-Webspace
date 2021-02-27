using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Models
{
    public class Fees
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public UserDetails User { get; set; }

        public int TotalPayable { get; set; }
        public int TotalPaid { get; set; }
        public string LastPaid { get; set; }

    }
}
