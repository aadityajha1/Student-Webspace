using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Course> Courses{ get; set; }
        public DbSet<Intake> Intakes{ get; set; }
    }
}
