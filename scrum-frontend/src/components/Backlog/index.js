import React, { useState, useEffect } from "react";
import BacklogService from "../../services/backlog/backlog.service";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

function Backlog(){

  const[tasks, setTasks] = useState([])

  const initialTaskState = {
    ownerId: 0,
    labelId: 0,
    title: "",
    content: "",
    status: 0,
    storyPoint: 0,
    createTime: new Date(),
    endTime: null,
    duration: 0
  };

  const[task, setTask] = useState(initialTaskState);
  const[currentTask, setCurrentTask] = useState(initialTaskState);

  const handleChange = event => {
    const { name, value } = event.target;
    setTask({ ...task, [name]:value });
  };

  const saveTask = () => {
    BacklogService.create(task);
    refreshPage();
  };

  const editTask = (taskId) => {
    debugger;
    BacklogService.update(taskId, task);
    refreshPage();
  };

  const deleteTask = (taskId) => {
    BacklogService.remove(taskId);
    refreshPage();
  };

  useEffect(() => {
    BacklogService.getAll()
      .then(res => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const refreshPage= () =>  {
    window.location.reload(false);
  }

  return(
    <div class="backlog d-flex flex-column mt-5">
        <div class="title d-flex justify-content-center mt-4">
          <h5>Backlog</h5>
        </div>
        <div>
          <hr class="my-divider"></hr>
        </div>
        <div class="my-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col"><input type="text" placeholder="Title.." id="title" name="title" onChange={handleChange}/></th>
              <th scope="col"><input type="text" placeholder="Content.."  id="content" name="content" onChange={handleChange}/></th>
              <th scope="col">
                <select class="my-form">
                  <option selected>Status</option>
                  <option>Not accepted</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </th>
              <th scope="col">
                <select class="my-form">
                  <option selected>Priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </th>
              <th scope="col">
                <select class="my-form">
                  <option selected>SP</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>5</option>
                  <option>8</option>
                  <option>13</option>
                  <option>20</option>
                  <option>40</option>
                </select>
              </th>
              <th scope="col" colspan="2">
                <button onClick={saveTask} className="btn btn-success">
                 Add
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
        </div>
       
    </div>
  )
}

export default Backlog