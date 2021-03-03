using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.ModuleService
{
    public class ModuleService : IModuleService
    {
        private readonly ApplicationDbContext _db;
        public ModuleService(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<ServiceResponse<Module>> CreateModule(Module module)
        {
            ServiceResponse<Module> serviceResponse = new ServiceResponse<Module>();
            await _db.Modules.AddAsync(module);
            serviceResponse.Data = module;
            serviceResponse.Message = "Module added Successfully";
            return serviceResponse;
        }

        public async Task<ServiceResponse<Module>> DeleteModuleById(int id)
        {
            ServiceResponse<Module> serviceResponse = new ServiceResponse<Module>();
            var module = await _db.Modules.FindAsync(id);
            if(module == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "Module Not Found";
                serviceResponse.Data = null;
                return serviceResponse;
            }
            _db.Modules.Remove(module);
            await _db.SaveChangesAsync();
            serviceResponse.Data = module;
            serviceResponse.Success = true;
            serviceResponse.Message = "Module Deleted Successfully";
            return serviceResponse;

        }

        public async Task<ServiceResponse<Module>> EditModuleById(int id, Module module)
        {
            ServiceResponse<Module> serviceResponse = new ServiceResponse<Module>();
            
            Module module1 = await _db.Modules.FindAsync(id);
            if (module1 == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "Module not found";
                return serviceResponse;
            }
            
            if (module.Name != null)
            {
                module1.Name = module.Name;
            }
            await _db.SaveChangesAsync();
            serviceResponse.Data = module1;
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Module>>> GetAllModules()
        {
            ServiceResponse<List<Module>> serviceResponse = new ServiceResponse<List<Module>>();
            var modules = await _db.Modules.ToListAsync();
            if(modules == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Data = null;
                serviceResponse.Message = "No Modules Found";
                return serviceResponse;
            }
            serviceResponse.Data = modules;
            serviceResponse.Success = true;
            serviceResponse.Message = "Modules found success";
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Module>>> GetByIntakeId(int id)
        {
            ServiceResponse<List<Module>> serviceResponse = new ServiceResponse<List<Module>>();
            List<Module> modules = await _db.Modules.Where(m => m.IntakeId == id).ToListAsync();
            if (modules == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "No Modules in this intake has been added yet.";
                return serviceResponse;
            }
            serviceResponse.Data = modules;
            serviceResponse.Message = "Modules found success";
            serviceResponse.Success = true;
            return serviceResponse;
        }

        public async Task<ServiceResponse<Module>> GetModuleById(int id)
        {
            ServiceResponse<Module> serviceResponse = new ServiceResponse<Module>();
            var module = await _db.Modules.FindAsync(id);
            if(module == null)
            {
                serviceResponse.Data = null;
                serviceResponse.Success = false;
                serviceResponse.Message = "Module not found";
                return serviceResponse;
            }
            serviceResponse.Data = module;
            serviceResponse.Success = true;
            serviceResponse.Message = "Module found success";
            return serviceResponse;
            
        }

        public async Task<ServiceResponse<List<Module>>> GetModulesByCourseId(int courseId)
        {
            ServiceResponse<List<Module>> serviceResponse = new ServiceResponse<List<Module>>();
            List<Module> modules = (List<Module>)_db.Modules.Where(m => m.Course.Id == courseId);
            serviceResponse.Data = modules;
            serviceResponse.Success = true;
            serviceResponse.Message = "Modules found success";
            return serviceResponse;
        }
    }
}
