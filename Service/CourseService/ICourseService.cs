using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.CourseService
{
    public interface ICourseService
    {
        Task<ServiceResponse<List<Course>>> GetAllCourses();
        Task<ServiceResponse<Course>> AddNewCourse(Course newCourse);
        Task<ServiceResponse<List<Course>>> DeleteAllCourses();
        Task<ServiceResponse<Course>> GetCourseById(int id);
        Task<ServiceResponse<Course>> DeleteCourseById(int id);
        Task<ServiceResponse<Course>> UpdateCourseById(int id);

        
    }
}
