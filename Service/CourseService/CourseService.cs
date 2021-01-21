using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.CourseService
{
    public class CourseService : ICourseService
    {
        private readonly ApplicationDbContext _db;
        public CourseService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<ServiceResponse<Course>> AddNewCourse(Course newCourse)
        {
            ServiceResponse<Course> serviceResponse = new ServiceResponse<Course>();
            await _db.Courses.AddAsync(newCourse);
            await _db.SaveChangesAsync();
            serviceResponse.Data = newCourse;
            serviceResponse.Message = "Course Added Successfully";
            return serviceResponse;
        }

        public Task<ServiceResponse<List<Course>>> DeleteAllCourses()
        {
            throw new NotImplementedException();
        }

        public Task<ServiceResponse<Course>> DeleteCourseById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<List<Course>>> GetAllCourses()
        {
            ServiceResponse<List<Course>> serviceResponse = new ServiceResponse<List<Course>>();
            serviceResponse.Data = await _db.Courses.ToListAsync();
            return serviceResponse;
        }

        public Task<ServiceResponse<Course>> GetCourseById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ServiceResponse<Course>> UpdateCourseById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
