using Microsoft.AspNetCore.Mvc;
using Student_Webspace.Models;
using Student_Webspace.Service.NotesService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly INoteService _noteService;
        public NotesController(INoteService noteService)
        {
            _noteService = noteService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _noteService.GetAllNotes());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Notes notes )
        {
            if (ModelState.IsValid)
            {
                return Ok(await _noteService.AddNewNotes(notes));
            }
            else
            {
                return BadRequest(new { Success = false, Message = "Please enter all fields correctly" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            return Ok(await _noteService.DeleteNoteById(id));
        }
    }
}
