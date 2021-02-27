using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Student_Webspace.Authentication;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<Course> Courses{ get; set; }
        public DbSet<Intake> Intakes{ get; set; }
        public DbSet<Module> Modules { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Result> Results { get; set; }
        public DbSet<SubmittedAssignment> SubmittedAssignments { get; set; }
        public DbSet<Notices> Notices { get; set; }
        public DbSet<Notes> Notes { get; set; }
        public DbSet<Fees> Fees { get; set; }
    }
}
