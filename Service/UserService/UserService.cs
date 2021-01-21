using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.UserService
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _db;

        public UserService(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<ServiceResponse<User>> AddNewUser(User user)
        {
            
            ServiceResponse<User> serviceResponse = new ServiceResponse<User>();
            //var course = _db.Courses.FirstOrDefault(c => c.Id == Int32.Parse(user.CourseId) );
            //user.Course = course;
            user.Enrolled_date = DateTime.Now.ToString();
            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();
            serviceResponse.Data = user;
            serviceResponse.Message = "User Added Successfully!!";
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<User>>> DeleteAll()
        {   
            ServiceResponse<List<User>> serviceResponse = new ServiceResponse<List<User>>();
            serviceResponse.Data = await _db.Users.ToListAsync();
            serviceResponse.Message = "Deleted all Users successfully!";
            var users = _db.Users;
            _db.Users.RemoveRange(users);
            await _db.SaveChangesAsync();
            
            return serviceResponse;
        }

        public async Task<ServiceResponse<User>> DeleteUserById(int id)
        {
            ServiceResponse<User> serviceResponse = new ServiceResponse<User>();
            var user = _db.Users.FirstOrDefault(u => u.Id == id);
            serviceResponse.Data = user;
            serviceResponse.Message = "User:" + user.Fullname + " deleted successfully";
            _db.Users.Remove(user);
            await _db.SaveChangesAsync();

           
            return serviceResponse;

        }
        
        public async Task<ServiceResponse<List<User>>> GetAllUsers()
        {
            ServiceResponse<List<User>> serviceResponse = new ServiceResponse<List<User>>();
            serviceResponse.Data =  _db.Users.ToList();
            serviceResponse.Message = "Users fetched from database";
            return serviceResponse;
        }

        public async Task<ServiceResponse<User>> GetUserById(int id)
        {
            ServiceResponse<User> serviceResponse = new ServiceResponse<User>();
            serviceResponse.Data =  _db.Users.FirstOrDefault(c => c.Id == id);
            return serviceResponse;
        }
    }
}
