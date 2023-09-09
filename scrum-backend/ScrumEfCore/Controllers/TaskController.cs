using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ScrumEfCore.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ScrumEfCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public TaskController(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        // GET: api/<TaskController>
        [HttpGet]
        public async Task<ActionResult<List<ScrumTask>>> Get()
        {
            var tasks = await _dataContext.ScrumTask.ToListAsync();
            var result = tasks.OrderByDescending(x => x.Id);

            return Ok(result);
        }

        // GET api/<TaskController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<List<ScrumTask>>> Get(int id)
        {
            var task = await _dataContext.ScrumTask.FindAsync(id);

            if (task == null) return BadRequest("Task not found");
           
            return Ok(task);
        }

        // POST api/<TaskController>
        [HttpPost]
        public async Task<ActionResult<List<ScrumTask>>> AddTask(ScrumTask task)
        {
            _dataContext.ScrumTask.Add(task);
            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.ScrumTask.ToListAsync());
        }

        // PUT api/<TaskController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<List<ScrumTask>>> UpdateTask(int id, ScrumTask request)
        {
            var task = await _dataContext.ScrumTask.FindAsync(id);
            if (task == null) return BadRequest("Task not found");

            request.Id = id;
            _dataContext.Entry(task).CurrentValues.SetValues(request);

            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.ScrumTask.ToListAsync());
        }

        // DELETE api/<TaskController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<ScrumTask>>> Delete(int id)
        {
            var task = await _dataContext.ScrumTask.FindAsync(id);
            if (task == null) return BadRequest("Task not found");

            _dataContext.ScrumTask.Remove(task);
            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.ScrumTask.ToListAsync());
        }
    }
}
