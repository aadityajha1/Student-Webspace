using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.AssignmentService
{
    public class AssignmentService : IAssignmentService
    {
        private readonly ApplicationDbContext _db;
        public AssignmentService(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<ServiceResponse<Assignment>> AddNewAssignment(Assignment assignment)
        {
            ServiceResponse<Assignment> serviceResponse = new ServiceResponse<Assignment>();
            var newAssignmnet = await _db.Assignments.AddAsync(assignment);
            await _db.SaveChangesAsync();
            serviceResponse.Data = assignment;
            serviceResponse.Success = true;
            serviceResponse.Message = "Assignment added successfully";
            return serviceResponse;

        }

        public async Task<ServiceResponse<Assignment>> DeleteAssignmentById(int id)
        {
            ServiceResponse<Assignment> serviceResponse = new ServiceResponse<Assignment>();
            var assignment = await _db.Assignments.FindAsync(id);
            if(assignment == null)
            {
                serviceResponse.Data = null;
                serviceResponse.Message = "Module not found";
                serviceResponse.Success = false;
                return serviceResponse;
            }
            _db.Assignments.Remove(assignment);
            await _db.SaveChangesAsync();
            serviceResponse.Data = assignment;
            serviceResponse.Success = true;
            serviceResponse.Message = "Assignment deleted successfully";
            return serviceResponse;

        }

        public async Task<ServiceResponse<Assignment>> EditAssignmentById(int id, Assignment assignment)
        {
            ServiceResponse<Assignment> serviceResponse = new ServiceResponse<Assignment>();
            var assignmentDb = await _db.Assignments.FindAsync(id);
            if(assignment == null)
            {
                serviceResponse.Data = null;
                serviceResponse.Success = false;
                serviceResponse.Message = "Assignment not found";
                return serviceResponse;
            }
            if (assignment.Deadline != null)
            {
                assignmentDb.Deadline = assignment.Deadline;
            }
            if (assignment.IntakeId > 0)
            {
                assignmentDb.IntakeId = assignment.IntakeId;
            }
            await _db.SaveChangesAsync();
            serviceResponse.Data = assignmentDb;
            serviceResponse.Message = "Assignment updated successfully";
            serviceResponse.Success = true;
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Assignment>>> GetAllAssignments()
        {
            ServiceResponse<List<Assignment>> serviceResponse = new ServiceResponse<List<Assignment>>();
            var assignments = await _db.Assignments.ToListAsync();
            if(assignments == null)
            {
                serviceResponse.Data = null;
                serviceResponse.Success = false;
                serviceResponse.Message = "No Assignments found";
                return serviceResponse;
            }
            serviceResponse.Data = assignments;
            serviceResponse.Success = true;
            serviceResponse.Message = "Assignments found success";
            return serviceResponse;
        }

        public async Task<ServiceResponse<Assignment>> GetAssignmentById(int id)
        {
            ServiceResponse<Assignment> serviceResponse = new ServiceResponse<Assignment>();
            var assignment = await _db.Assignments.FindAsync(id);
            if(assignment == null)
            {
                serviceResponse.Data = null;
                serviceResponse.Success = false;
                serviceResponse.Message = "No Assignments found";
                return serviceResponse;
            }
            serviceResponse.Data = assignment;
            serviceResponse.Success = true;
            serviceResponse.Message = "Assignemnt found success";
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<Assignment>>> GetAssignmentByIntake(int intakeId)
        {
            ServiceResponse<List<Assignment>> serviceResponse = new ServiceResponse<List<Assignment>>();
            var assignments = await _db.Assignments.Where(a => a.IntakeId == intakeId).ToListAsync();
            if (assignments != null)
            {
                serviceResponse.Success = true;
                serviceResponse.Data = assignments;
                serviceResponse.Message = "Assignments found success";
                return serviceResponse;
            }

            serviceResponse.Success = false;
            serviceResponse.Message = "No assignments in this Intake";
            return serviceResponse;

        }
    }
}
