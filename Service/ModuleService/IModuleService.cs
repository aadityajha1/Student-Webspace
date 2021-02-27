using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.ModuleService
{
    public interface IModuleService
    {
        Task<ServiceResponse<List<Module>>> GetModulesByCourseId(int courseId);
        
        Task<ServiceResponse<List<Module>>> GetAllModules();

        Task<ServiceResponse<Module>> CreateModule(Module module);
        Task<ServiceResponse<Module>> GetModuleById(int id);

        Task<ServiceResponse<Module>> EditModuleById(int id, Module module);

        Task<ServiceResponse<Module>> DeleteModuleById(int id);
    }
}
