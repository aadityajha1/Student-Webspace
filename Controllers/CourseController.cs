using Microsoft.AspNetCore.Mvc;
using Student_Webspace.Models;
using Student_Webspace.Service.CourseService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {

        private readonly ICourseService _courseService;
        public CourseController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _courseService.GetAllCourses());
        }

        [HttpPost]
        public async Task<IActionResult> AddNewCourse(Course course)
        {
            return Ok(await _courseService.AddNewCourse(course));
        }
    }
}
