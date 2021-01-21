using Microsoft.AspNetCore.Mvc;
using Student_Webspace.Models;
using Student_Webspace.Service.IntakeService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class IntakeController : ControllerBase
    {
        private readonly IIntakeService _intakeService;

        public IntakeController(IIntakeService intakeService)
        {
            _intakeService = intakeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _intakeService.GetAllIntakes());
        }

        [HttpPost]
        public async Task<IActionResult> AddNewIntake(Intake intake)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _intakeService.AddNewIntake(intake));
            }
            else
            {
                ServiceResponse<Intake> serviceResponse = new ServiceResponse<Intake>();
                serviceResponse.Success = false;
                serviceResponse.Message = "Intake not created";
                return BadRequest(serviceResponse);
            }
            
        }
    }
}
