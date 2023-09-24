import {api} from '@/Api/axios.config'

export async function getTasks(){
    let res = await api
    .get('tasks');
     if (res) return res.data
     else
     return false
}

export async function getTask(id){
    let res = await api
    .get('tasks/' + id);
     if (res) return res.data
     else
     return false
}

export async function createTasks(objCreateTask){
    let res = await api
    .post('tasks', objCreateTask);
     if (res) return res.data
     else
     return false
}

export async function editTasks(taskId, objTask){
    let res = await api
    .put('tasks/' + taskId, objTask);
     if (res) return res.data
     else
     return false
}


export async function deleteTasks(taskId){
    let res = await api
    .delete('tasks/' + taskId);
     if (res) return res.status
     else
     return false
}
