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

        public async Task<ServiceResponse<List<Intake>>> DeleteAllIntakes()
        {
            ServiceResponse<List<Intake>> serviceResponse = new ServiceResponse<List<Intake>>();
            var intakes = await _db.Intakes.ToListAsync();
            if( intakes.Count > 0)
            {
                _db.Intakes.RemoveRange(intakes);
                await _db.SaveChangesAsync();
                serviceResponse.Data = intakes;
                serviceResponse.Success = true;
                serviceResponse.Message = "Deleted all intakes";
                return serviceResponse;
            }
            serviceResponse.Success = false;
            serviceResponse.Message = "No intakes found";
            return serviceResponse;
        }

        public async Task<ServiceResponse<Intake>> DeleteIntakeById(int id)
        {
            ServiceResponse<Intake> serviceResponse = new ServiceResponse<Intake>();
            var intake = await _db.Intakes.FindAsync(id);
            if (intake == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = "No Intake found for this Id";
                return serviceResponse;
            }
            _db.Intakes.Remove(intake);
            await _db.SaveChangesAsync();
            serviceResponse.Success = true;
            serviceResponse.Message = "Deleted Intake successfully";
            serviceResponse.Data = intake;
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Intake>>> GetAllIntakes()
        {
            ServiceResponse<List<Intake>> serviceResponse = new ServiceResponse<List<Intake>>();
            serviceResponse.Data = await _db.Intakes.ToListAsync();
            serviceResponse.Success = true;
            serviceResponse.Message = "Found All Intakes";
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
