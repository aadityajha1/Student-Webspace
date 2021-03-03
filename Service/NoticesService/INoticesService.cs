using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.NoticesService
{
    public interface INoticesService
    {
        Task<ServiceResponse<List<Notices>>> GetAllNotices();
        Task<ServiceResponse<Notices>> AddNew(Notices notices);
        Task<ServiceResponse<Notices>> GetById(int id);
        Task<ServiceResponse<Notices>> EditById(int id, Notices notices);
        Task<ServiceResponse<Notices>> DeleteById(int id);

    }

}
