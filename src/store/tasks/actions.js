import { getTasks, getTask, createTasks, deleteTasks, editTasks } from '@/Api/tasks'

export default {
    getListTasks() {
        return getTasks().then((tasks) => {
            this.commit('Tasks/UPDATE_TASKS', tasks)
        })
    },

    getSingleTask({ commit, state }, id) {
        if (state.tasksDetails[id]) return Promise.resolve(state.tasksDetails[id]);
        return getTask(id).then((task) => {
            commit("Tasks/UPDATE_TASKS_DETAILS", { ...state.tasksDetails, [id]: task })
            return task;
        })
    },

    createNewTask({ commit, state }, task) {
        return createTasks(task).then((task) => {
            commit("Tasks/UPDATE_TASKS", state.tasks.push(task))
        })

    },

    deleteTaskFromState({ state }, id) {
        return deleteTasks(id).then(() => {
            state.tasks = state.tasks.filter((obj) => { return obj.id != id })
        })
    },

    filterTasksByStatus({ state }, id) {
        state.tasksFilter = state.tasks.filter( (obj) => {return obj.status == id} )
    },

    editTaskFromState({ state }, { id, task }) {
        return editTasks(id, task).then(() => {
            state.tasks = state.tasks.map((obj) => {
                if (obj.id == id) {
                    obj.name = task.name
                    obj.desciption = task.desciption
                    obj.status = task.status
                    return obj
                } else {
                    return obj
                }
            })
        })
    },
    
}

