using Microsoft.AspNetCore.Mvc;
using Student_Webspace.Models;
using Student_Webspace.Service.NoticesService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Controllers
{   
    [ApiController]
    [Route("api/[controller]")]
    public class NoticesController : ControllerBase
    {
        private readonly INoticesService _noticesService;
        public NoticesController(INoticesService noticesService)
        {
            _noticesService = noticesService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _noticesService.GetAllNotices());
        }
        [HttpPost]
        public async Task<IActionResult> AddNewNotice(Notices notices)
        {
            return Ok(await _noticesService.AddNew(notices));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAll(int id)
        {
            return Ok(await _noticesService.DeleteById(id));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditById(int id, Notices notices)
        {
            return Ok(await _noticesService.EditById(id, notices));
        }


    }
}
