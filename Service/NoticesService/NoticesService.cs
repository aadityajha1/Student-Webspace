using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.NoticesService
{
    public class NoticesService : INoticesService
    {
        private readonly ApplicationDbContext _db;
        public NoticesService(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<ServiceResponse<Notices>> AddNew(Notices notices)
        {
            ServiceResponse<Notices> serviceResponse = new ServiceResponse<Notices>();
            await _db.Notices.AddAsync(notices);
            await _db.SaveChangesAsync();
            serviceResponse.Data = notices;
            serviceResponse.Success = true;
            serviceResponse.Message = "Notice uploaded successfully";
            return serviceResponse;

        }

        public async Task<ServiceResponse<Notices>> DeleteById(int id)
        {
            ServiceResponse<Notices> serviceResponse = new ServiceResponse<Notices>();
            var notice = await _db.Notices.FindAsync(id);
            if(notice == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "Notice not found";
                return serviceResponse;
            }
             _db.Notices.Remove(notice);
            await _db.SaveChangesAsync();
            serviceResponse.Data = notice;
            serviceResponse.Success = true;
            serviceResponse.Message = "Notice removed successfully";
            return serviceResponse;

        }

        public async Task<ServiceResponse<Notices>> EditById(int id, Notices notices)
        {
            ServiceResponse<Notices> serviceResponse = new ServiceResponse<Notices>();
            var notice = await _db.Notices.FindAsync(id);
            if(notice == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "Notice not found";
                return serviceResponse;
            }
            if (notices.Content != null)
            {
                notice.Content = notices.Content;
            }
            if(notices.Title != null)
            {
                notice.Title = notices.Title;
            }
            if(notices.SubTitle != null)
            {
                notice.SubTitle = notices.SubTitle;
            }
            await _db.SaveChangesAsync();
            serviceResponse.Data = notice;
            serviceResponse.Success = true;
            serviceResponse.Message = "Notice Updated Successfully";
            return serviceResponse;
            
        }

        public async Task<ServiceResponse<List<Notices>>> GetAllNotices()
        {
            ServiceResponse<List<Notices>> serviceResponse = new ServiceResponse<List<Notices>>();
            
            serviceResponse.Data = await _db.Notices.ToListAsync();
            serviceResponse.Success = true;
            serviceResponse.Message = "All Notices fetched";
            return serviceResponse;
        }

        public async Task<ServiceResponse<Notices>> GetById(int id)
        {
            ServiceResponse<Notices> serviceResponse = new ServiceResponse<Notices>();
            serviceResponse.Data = await _db.Notices.FindAsync(id);
            serviceResponse.Success = true;
            serviceResponse.Message = "Notice found success";
            return serviceResponse;
        }
    }
}
