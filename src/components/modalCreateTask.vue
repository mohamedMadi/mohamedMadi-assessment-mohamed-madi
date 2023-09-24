<template>
    <modal name="modalCreate" width="80%" height="auto"  scrollable="true">
        <div class="modalPopUp">

            <h4 v-if="actionType == 'create'">Add New Task</h4>
            <h4 v-else>Edit Task</h4>

            <form>
                <div class="input_control">
                    <label>taks title</label>
                    <input class="text_input with_border" type="text" v-model="taskTitle" placeholder="task Name" />
                </div>

                <div class="input_control">
                    <label>Select Status</label>
                    <Multiselect v-model="status" :options="statuses" label="name" track-by="name" :searchable="false"
                        :close-on-select="true" :show-labels="false" placeholder="Select Status"></Multiselect>
                </div>

                <div class="input_control">
                    <label>taks Description</label>
                    <textarea v-model="description" placeholder="Description"></textarea>
                </div>

                <button type="button" @click="submitNewTask" class="submit">Submit</button>
            </form>
        </div>

    </modal>
</template>

<script>
import Multiselect from "vue-multiselect";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers('Tasks')

export default {
    props: ['actionType', 'taskId'],
    components: {
        Multiselect
    },

    watch: {
        taskId() {
            this.getSingleTaskFromState()
        }
    },

    data() {
        return {
            taskTitle: null,
            description: null,

            statuses: [
                { id: 1, name: "Todo" },
                { id: 2, name: "In Progress" },
                { id: 3, name: "Testing" },
                { id: 4, name: "Finshing" }
            ],
            status: null,
        }
    },

    methods: {
        ...mapActions(['createNewTask', 'editTaskFromState', 'getSingleTask']),
        async submitNewTask() {
            if (this.taskTitle == null || this.taskTitle == "") {
                this.$noty.warning("Please enter title")
            } else if (this.status == null) {
                this.$noty.warning("Please select status")
            } else if (this.description == null) {
                this.$noty.warning("Please enter description")
            } else {
                let objCreateTask = {
                    name: this.taskTitle,
                    desciption: this.description,
                    status: this.status.id,
                }
                if (this.actionType == 'create') {
                    this.createNewTask(objCreateTask).then(() => {
                        this.$modal.hide('modalCreate')
                        this.$noty.success("Your task has been saved!")
                        this.taskTitle = null
                        this.status = null
                        this.description = null
                    })
                } else {
                    const payload = {
                        id: this.taskId,
                        task: objCreateTask,
                    }
                    this.editTaskFromState(payload).then(() => {
                        this.$modal.hide('modalCreate')
                        this.$noty.success("Your task has been updated!")
                        this.taskTitle = null
                        this.status = null
                        this.description = null
                    })
                }

            }
        },

        getSingleTaskFromState() {
            if (this.actionType != 'create' && this.taskId != null) {
                this.getSingleTask(this.taskId).then((task) => {
                    this.taskTitle = task.name
                    this.description = task.desciption
                    this.status = this.statuses.filter((obj) => { return obj.id == task.status })
                })
            }
        }
    },

    mounted() {
        this.getSingleTaskFromState()
    }
}
</script>