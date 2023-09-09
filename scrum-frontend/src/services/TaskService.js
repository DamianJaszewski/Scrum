import http from "../http-common";

const getAll = () =>{
    return http.get("/Task");
};

const TaskService = {
    getAll
};

export default TaskService;