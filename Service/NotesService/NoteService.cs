using Microsoft.EntityFrameworkCore;
using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.NotesService
{
    public class NoteService : INoteService
    {
        private readonly ApplicationDbContext _db;
        public NoteService(ApplicationDbContext db)
        {
            _db = db;
        }
        public async Task<ServiceResponse<Notes>> AddNewNotes(Notes notes)
        {
            ServiceResponse<Notes> serviceResponse = new ServiceResponse<Notes>();
            var note = await _db.Notes.AddAsync(notes);
            await _db.SaveChangesAsync();
            serviceResponse.Data = notes;
            serviceResponse.Success = true;
            serviceResponse.Message = "Note Added successfully";
            return serviceResponse;
        }

        public async Task<ServiceResponse<Notes>> DeleteNoteById(int id)
        {
            ServiceResponse<Notes> serviceResponse = new ServiceResponse<Notes>();
            var notefromDb = await _db.Notes.FindAsync(id);
            if(notefromDb == null)
            {
                serviceResponse.Success = false;
                serviceResponse.Data = null;
                serviceResponse.Message = "Note not found";
            }
            _db.Notes.Remove(notefromDb);
            await _db.SaveChangesAsync();
            serviceResponse.Success = true;
            serviceResponse.Message = "Note deleted successfully";
            return serviceResponse;
        }

        public Task<ServiceResponse<Notes>> EditNoteById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse<List<Notes>>> GetAllNotes()
        {
            ServiceResponse<List<Notes>> serviceResponse = new ServiceResponse<List<Notes>>();
            var notes = await _db.Notes.ToListAsync();
            serviceResponse.Data = notes;
            serviceResponse.Success = true;
            serviceResponse.Message = "Notes found success";
            return serviceResponse;

        }

        public async Task<ServiceResponse<List<Notes>>> GetNotesByModuleId(int moduleId)
        {
            ServiceResponse<List<Notes>> serviceResponse = new ServiceResponse<List<Notes>>();
            var notes = await _db.Notes.Where(n => n.ModuleId == moduleId).ToListAsync();
            if(notes != null)
            {
                serviceResponse.Data = notes;
                serviceResponse.Success = true;
                serviceResponse.Message = "Notes found for the given ModuleId";
                return serviceResponse;
            }
            serviceResponse.Success = false;
            serviceResponse.Message = "Notes are not available for this module";
            return serviceResponse;
        }
    }
}
