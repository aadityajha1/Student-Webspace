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
            if(ModelState.IsValid == true)
            {
                return Ok(await _moduleService.CreateModule(module));
            }
            else
            {
                return BadRequest("ERROR: Enter all required fields");
            }
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

    }
}
