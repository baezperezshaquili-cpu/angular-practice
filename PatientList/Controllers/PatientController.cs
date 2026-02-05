using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class PatientController:ControllerBase
{
    private readonly AppDBContext _context;
    public PatientController(AppDBContext context) => _context = context;

    [HttpGet]
    public async Task<IEnumerable<Patient>>GetPatients() => await _context.Patients.ToListAsync();

    [HttpPost]
    public async Task<ActionResult<Patient>>AddPatient(Patient patient)
    {
        _context.Patients.Add(patient);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetPatients), new {id = patient.Id}, patient);
    }
}