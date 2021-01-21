using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.IntakeService
{
    public interface IIntakeService
    {
        Task<ServiceResponse<List<Intake>>> GetAllIntakes();
        Task<ServiceResponse<Intake>> GetIntakeById(int id);
        Task<ServiceResponse<Intake>> DeleteIntakeById(int id);
        Task<ServiceResponse<Intake>> UpdateIntakeById(int id);
        Task<ServiceResponse<Intake>> AddNewIntake(Intake intake);
        Task<ServiceResponse<List<Intake>>> DeleteAllIntakes();
    }
}
