# Scrum App
A prototype application for managing tasks based on the agile Scrum methodology. <br>
The following technologies were used to create the application: <br>
* Backend - .Net Rest API
* Frontend - React
    
## Table of Contents
* [General Information](#General-Information)
* [Documentation](#Documentation)
* [Technologies](#Technologies)
* [Code Example](#Code-Example)
* [Requirements](#Requirements)
  
## General Information
The application allows performing CRUD operations on tasks to create a backlog of tasks.   
The interface includes views for sprints, as well as login and registration.

## Documentation
View of the Product Backlog screen
![flashcard](./jpg/Backlog.png)<br>
Login screen view
![menu](./jpg/Login.png)<br>
Entity relationship diagram (ERD).<br>
![erd](./jpg/erd.png)

## Technologies
Frontend - React   
Backend - .Net Web API   
Backend Framework - .NET 6   
Used database - local Ms SQL   <br><br>
Used packages:
* Microsoft.EntityFrameworkCore.Design
* Microsoft.EntityFrameworkCore.SqlServer
* Microsoft.EntityFrameworkCore
  
## Code Example
* GetAll method in the TaskController
```csharp
[HttpGet]
public async Task<ActionResult<List<ScrumTask>>> Get()
{
    var tasks = await _dataContext.ScrumTask.ToListAsync();
    var result = tasks.OrderByDescending(x => x.Id);

    return Ok(result);
}
```
* GetById method in the TaskController
```csharp
[HttpGet("{id}")]
public async Task<ActionResult<List<ScrumTask>>> Get(int id)
{
    var task = await _dataContext.ScrumTask.FindAsync(id);

    if (task == null) return BadRequest("Task not found");

    return Ok(task);
}
```
* Add method in the TaskController
```csharp
[HttpPost]
public async Task<ActionResult<List<ScrumTask>>> AddTask(ScrumTask task)
{
    _dataContext.ScrumTask.Add(task);
    await _dataContext.SaveChangesAsync();

    return Ok(await _dataContext.ScrumTask.ToListAsync());
}
```
* Update method in the TaskController
```csharp
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
```
* Adding routing to the application using react-router-dom with links to the respective components.
```JSX
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Backlog/>}/>
    </Routes>
    <Routes>
      <Route path="/sprint" element={<Sprint/>}/>
    </Routes>
    <Routes>
      <Route path="/retro" element={<Retro/>}/>
    </Routes>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
  <div class="footer">
    <Footer />
  </div>
</BrowserRouter>
```
* Displaying tasks in the Backlog:
```JSX
   {(tasks.length !== 0)
      ? tasks.map((task) => (
        <tr>
          <th key={task.id} scope="row">{task.id}</th>
          <td>
            <input type="text" placeholder={task.title} name="title" onChange={handleChange}/>
          </td>
          <td>{task.content}</td>
          <td>{task.status}</td>
          <td>not set</td>
          <td>{task.storyPoint}</td>
          <td>
            <button onClick={()=>editTask(task.id)} className="btn btn-success">
              Edit
            </button>
          </td>
          <td>
            <button onClick={()=>deleteTask(task.id)} className="btn btn-success">
              Del
            </button>
          </td>
        </tr>
      ))
      :<div class="d-flex justify-content-center">
        <font color="red">Something went wrong</font>
      </div>
  }
```

## Requirements
* Product Backlog Management - the application allows creating, editing, and deleting tasks.
* The application allows defining priorities for tasks and tracking their progress.
* The Product Backlog contains requirements in the form of user stories, priority, status, summary, and weight expressed in story points.
