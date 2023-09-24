<template>
  <div class="tasks">
    <div class="add_project">
      <button @click="openPopupCreate" type="button">Add New Task</button>
    </div>

    <!-- List Tasks -->
    <div class="tasks_wrapper">
      <div class="single_tasks task_wrapper" v-for="task in tasks" :key="task.id">
        <div class="actions_btns">
          <button @click="btnEditTask(task.id)">
            <img src="@/assets/edit.svg" alt="" />
          </button>
          <button type="button" @click="openModalDelete(task.id)">
            <img src="@/assets/trash.svg" alt="" />
          </button>
        </div>

        <span v-if="task.status == 1">Todo</span>
        <span class="inProgress" v-if="task.status == 2">In Progress</span>
        <span class="testing" v-if="task.status == 3">Testing</span>
        <span class="finshing" v-if="task.status == 4">Finshing</span>
        <h5>{{ task.name }}</h5>
        <h6>{{ task.desciption }}</h6>
        <button class="details_btn">
          <router-link :to="'tasks/' + task.id">
            Details
          </router-link>
        </button>
      </div>
    </div>

    <ModalCreateTask :actionType="actionType" :taskId="taskId" />

    <ModalDeleteTask :taskId="taskId" />

  </div>
</template>

<script>
import ModalCreateTask from '@/components/modalCreateTask.vue'
import ModalDeleteTask from '@/components/modalDeleteTask.vue'
// import Multiselect from "vue-multiselect";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers('Tasks')

export default {
  name: 'TasksComponent',
  components: {
    // Multiselect,
    ModalCreateTask,
    ModalDeleteTask
  },

  data() {
    return {
      endOpen: false,
      taskId: null,
      actionType: "create",

      singleTask:{},
    }
  },

  computed: {
    ...mapState(['tasks'])
  },

  methods: {
    ...mapActions(['getListTasks', 'getSingleTask']),
    openPopupCreate() {
      this.actionType = "create"
      this.$modal.show('modalCreate')
    },

    openModalDelete(taskId) {
      this.taskId = taskId
      this.$modal.show('modalDelete')
    },

    btnEditTask(taskId) {
      this.taskId = taskId
      this.actionType = "edit"
      this.$modal.show('modalCreate')
    }
  },

  mounted() {
    this.getListTasks()
  }
}
</script>

<style>
.tasks .add_project {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}

.tasks .add_project button {
  width: 200px;
  height: 40px;
  border: 0;
  background-color: #7e88fd;
  color: #ebe4ea;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
}

.tasks .tasks_wrapper span,
.task .tasks_wrapper span{
  display:inline-block;
  padding: 5px 10%;
  background:#DDD;
  border-radius:5px;
}


.modalPopUp {
  padding: 0 5%;
}

.modalPopUp h4 {
  font-size: 22px !important;
  font-weight: 700 !important;
  margin-bottom: 10px;
  border-radius: 15px !important;
  padding: 12px 0 !important;
  padding-left: 0px;
  display: flex !important;
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
  text-transform: capitalize !important;
  background-color: var(--lightBlue) !important;
  color: var(--darkBlue) !important;
  padding-left: 40px !important;
}


.modalPopUp form {
  width: 80%;
  margin: auto;
  padding-top: 30px;
}

.modalPopUp form .input_control {
  text-align: left;
}

.modalPopUp form label {
  display: inline-block;
}

.modalPopUp form .input_control input {
  margin-top: 10px;
}

.modalPopUp form .input_control textarea {
  width: 100%;
  resize: none;
  border: 1px solid #dadada !important;
  padding: 10px 30px !important;
  height: 130px !important;
  font-size: 18px !important;
  border-radius: 15px !important;
  outline: none;
}

.modalPopUp form .input_control textarea::placeholder {
  color: #c3c3c9 !important;
}

.modalPopUp .submit {
  background-color: var(--lightBlue) !important;
  color: var(--darkBlue) !important;
  width: 160px;
  height: 48px;
  border: none;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  cursor: pointer;
}

.modalPopUp .submit:hover {
  background-color: var(--darkBlue) !important;
  color: var(--borderBottomColor) !important;
}

.actions_btns button {
  cursor: pointer;
}


.bodyModal {
  padding: 0 10%
}

.bodyModal h3 {
  text-align: left;
}

.bodyModal .btnsAction {
  display: flex;
  margin: 40px 0 20px 0;
  justify-content: flex-end;
}

.bodyModal .btnsAction button {
  padding: 10px 3%;
  /* background:blueviolet; */
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  font-size: 15px;
  margin: 0 1%;

}

.bodyModal .btnsAction button.danger {
  color: #FFF;
  background: #C41C1C;
}

.bodyModal .btnsAction button.cancel {
  color: #FFF;
  background: #0B6BCB;
  border: 1px solid #0B6BCB
}

</style>
