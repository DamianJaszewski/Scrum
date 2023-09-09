import http from "../../http-common";

const getAll = () =>{
    return http.get("/Task");
};

const create = data => {
    http.post("/Task", {
        "id": 0,
        "ownerId": 0,
        "labelId": 0,
        "title": data.title,
        "content": data.content,
        "status": 0,
        "storyPoint": 0,
        "createTime": data.createTime,
        "endTime": null,
        "duration": 0
    });
};

const get = id => {
    return http.get(`/Task/${id}`);
};

const update = (id, data) => {
return http.put(`/Task/${id}`, data);
};

const remove = id => {
return http.delete(`/Task/${id}`);
};

const BacklogService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default BacklogService;