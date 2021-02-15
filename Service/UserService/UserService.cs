using Microsoft.EntityFrameworkCore;
using Student_Webspace.Dtos.Users;
using Student_Webspace.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student_Webspace.Service.UserService
{
    public class UserService : IUserService
    {
        private string Key = "123b123hj1234JSDGHUI1234123BJASDFJASDB234KJDKFNSADFKJB234QBQ34BQKY93";
        public string Decrypt(string base64EncodedString)
        {
            if (string.IsNullOrEmpty(base64EncodedString)) return "";
            var base64Bytes = Convert.FromBase64String(base64EncodedString);
            var result = Encoding.UTF8.GetString(base64Bytes);
            result = result.Substring(0, result.Length - Key.Length);
            return result;

        }

        public string Encrypt(string text)
        {
            if (string.IsNullOrEmpty(text)) return "";
            text += Key;
            var textBytes = Encoding.UTF8.GetBytes(text);
            return Convert.ToBase64String(textBytes);
        }
        private readonly ApplicationDbContext _db;

        
        public UserService(ApplicationDbContext db)
        {
            _db = db;
        }
        
        public async Task<ServiceResponse<UserDetails>> AddNewUser(UserDetails user)
        {
            
            ServiceResponse<UserDetails> serviceResponse = new ServiceResponse<UserDetails>();
            //var course = _db.Courses.FirstOrDefault(c => c.Id == Int32.Parse(user.CourseId) );
            //user.Course = course;
            user.Enrolled_date = DateTime.Now.ToString();
            user.Password = Encrypt(user.Password);
            await _db.UserDetails.AddAsync(user);
            await _db.SaveChangesAsync();
            serviceResponse.Data = user;
            serviceResponse.Message = "User Added Successfully!!";
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<UserDetails>>> DeleteAll()
        {   
            ServiceResponse<List<UserDetails>> serviceResponse = new ServiceResponse<List<UserDetails>>();
            serviceResponse.Data = await _db.UserDetails.ToListAsync();
            serviceResponse.Message = "Deleted all Users successfully!";
            var users = _db.Users;
            _db.Users.RemoveRange(users);
            await _db.SaveChangesAsync();
            
            return serviceResponse;
        }

        public async Task<ServiceResponse<UserDetails>> DeleteUserById(int id)
        {
            ServiceResponse<UserDetails> serviceResponse = new ServiceResponse<UserDetails>();
            var user = await _db.UserDetails.FindAsync(id);
            if (user == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "User Not Found";
                return serviceResponse;
            }
            serviceResponse.Data = user;
            serviceResponse.Message = "User:" + user.Fullname + " deleted successfully";
            _db.UserDetails.Remove(user);
            await _db.SaveChangesAsync();

           
            return serviceResponse;

        }
        
        public async Task<ServiceResponse<List<UserDetails>>> GetAllUsers()
        {
            ServiceResponse<List<UserDetails>> serviceResponse = new ServiceResponse<List<UserDetails>>();
            serviceResponse.Data =  _db.UserDetails.ToList();
            serviceResponse.Message = "Users fetched from database";
            return serviceResponse;
        }

        public async Task<ServiceResponse<UserDetails>> GetUserById(int id)
        {
            ServiceResponse<UserDetails> serviceResponse = new ServiceResponse<UserDetails>();
            var user = await _db.UserDetails.FindAsync(id);
            if (user == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "User Not Found";
                return serviceResponse;
            }
            serviceResponse.Data = user;
            serviceResponse.Message = "User Found Successfully";
            return serviceResponse;
        }

        public async Task<ServiceResponse<UserDetails>> UpdateUserById(int id, UpdateUserDto updatedUser)
        {
            ServiceResponse<UserDetails> serviceResponse = new ServiceResponse<UserDetails>();
            UserDetails user = await _db.UserDetails.FindAsync(id);
            if(user == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "User not found";
                return serviceResponse;
            }
            user.Enrolled_date = user.Enrolled_date;
            user.Email = user.Email;
            user.Password = user.Password;
            if(updatedUser.Fullname != null)
            {
                user.Fullname = updatedUser.Fullname;
            }
            
            if(updatedUser.Gender != null)
            {
                user.Gender = updatedUser.Gender;
            }
            

            if (updatedUser.Image != null)
            {
                user.Image = updatedUser.Image;
            }
            
            
            
            
            if(updatedUser.User_role != null)
            {
                user.User_role = updatedUser.User_role;
            }
            
            
            
            await _db.SaveChangesAsync();
            serviceResponse.Data = user;
            return serviceResponse;
        }
    }
}
