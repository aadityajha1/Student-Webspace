using Student_Webspace.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student_Webspace.Service.NotesService
{
    public interface INoteService
    {
        Task<ServiceResponse<List<Notes>>> GetAllNotes();
        Task<ServiceResponse<Notes>> AddNewNotes(Notes notes);
        Task<ServiceResponse<List<Notes>>> GetNotesByModuleId(int moduleId);
        Task<ServiceResponse<Notes>> DeleteNoteById(int id);
        Task<ServiceResponse<Notes>> EditNoteById(int id);
    }
}
