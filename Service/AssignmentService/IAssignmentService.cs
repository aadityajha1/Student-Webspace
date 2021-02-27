using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.AssignmentService
{
    public interface IAssignmentService
    {
        Task<ServiceResponse<List<Assignment>>> GetAllAssignments();

        Task<ServiceResponse<List<Assignment>>> GetAssignmentByIntake(int intakeId);

        Task<ServiceResponse<Assignment>> AddNewAssignment(Assignment assignment);

        Task<ServiceResponse<Assignment>> GetAssignmentById(int id);

        Task<ServiceResponse<Assignment>> DeleteAssignmentById(int id);

        Task<ServiceResponse<Assignment>> EditAssignmentById(int id, Assignment assignment);
    }
}
