using Microsoft.AspNetCore.Mvc;
using Student_Webspace.Models;
using Student_Webspace.Service.ModuleService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModuleController : ControllerBase
    {
        private readonly IModuleService _moduleService;
        public ModuleController(IModuleService moduleService)
        {
            _moduleService = moduleService;
        }

        [HttpPost]
        public async Task<IActionResult> AddNewModule(Module module)
        {
                return Ok(await _moduleService.CreateModule(module));
            
            //if(ModelState.IsValid == true)
            //{
            //}
            //else
            //{
            //    return BadRequest("ERROR: Enter all required fields");
            //}
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _moduleService.GetAllModules());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditModuleById( int id,[FromBody] Module module)
        {
            return Ok(await _moduleService.EditModuleById(id, module));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteModule(int id)
        {
            return Ok(await _moduleService.DeleteModuleById(id));
        }

        [HttpGet("module/{id}")]
        public async Task<IActionResult> GetByIntakeId(int id)
        {
            var response = await _moduleService.GetByIntakeId(id);
            if(response.Success == true)
            {
                return Ok(response);
            }
            else
            {
                return BadRequest(response);
            }
        }
    }
}
