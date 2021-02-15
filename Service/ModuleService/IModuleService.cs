using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.ModuleService
{
    public interface IModuleService
    {
        Task<ServiceResponse<List<Module>>> GetModulesByIntake(int intakeId);

        Task<ServiceResponse<Module>> CreateModule(Module module);
        Task<ServiceResponse<Module>> GetModuleById(Module module);

        Task<ServiceResponse<Module>> EditModuleById(Module module);
    }
}
