using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.IntakeService
{
    public class IntakeService : IIntakeService
    {
        private readonly ApplicationDbContext _db;
        public IntakeService(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<ServiceResponse<Intake>> AddNewIntake(Intake intake)
        {
            ServiceResponse<Intake> serviceResponse = new ServiceResponse<Intake>();
            await _db.Intakes.AddAsync(intake);
            await _db.SaveChangesAsync();
            serviceResponse.Data = intake;
            serviceResponse.Message = "Intake code created successfully";
            return serviceResponse;
            
        }

        public Task<ServiceResponse<List<Intake>>> DeleteAllIntakes()
        {
            throw new NotImplementedException();
        }

        public Task<ServiceResponse<Intake>> DeleteIntakeById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<List<Intake>>> GetAllIntakes()
        {
            ServiceResponse<List<Intake>> serviceResponse = new ServiceResponse<List<Intake>>();
            serviceResponse.Data = await _db.Intakes.ToListAsync();
            return serviceResponse;
        }

        public Task<ServiceResponse<Intake>> GetIntakeById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ServiceResponse<Intake>> UpdateIntakeById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
