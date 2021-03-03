using Student_Webspace.Dtos.Users;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.UserService
{
    public interface IUserService
    {
        Task<ServiceResponse<List<UserDetails>>> GetAllUsers();

        Task<ServiceResponse<UserDetails>> AddNewUser(UserDetails newUser);
        Task<ServiceResponse<UserDetails>> DeleteUserById(int id);

        Task<ServiceResponse<List<UserDetails>>> DeleteAll();

        Task<ServiceResponse<UserDetails>> GetUserById(int id);

        Task<ServiceResponse<UserDetails>> UpdateUserById(int id, UpdateUserDto updateduser);
        Task<ServiceResponse<UserDetails>> GetByUsername(string username);
    }
}
