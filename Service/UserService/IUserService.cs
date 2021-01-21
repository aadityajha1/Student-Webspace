using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.UserService
{
    public interface IUserService
    {
        Task<ServiceResponse<List<User>>> GetAllUsers();

        Task<ServiceResponse<User>> AddNewUser(User newUser);
        Task<ServiceResponse<User>> DeleteUserById(int id);

        Task<ServiceResponse<List<User>>> DeleteAll();

        Task<ServiceResponse<User>> GetUserById(int id);
    }
}
