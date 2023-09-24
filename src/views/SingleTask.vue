<template>
  <div class="task">
    <!-- Single Task -->
    <div class="tasks_wrapper">
      <div class="single_tasks task_wrapper">
        <span v-if="task.status == 1">Todo</span>
        <span class="inProgress" v-if="task.status == 2">In Progress</span>
        <span class="testing" v-if="task.status == 3">Testing</span>
        <span class="finshing" v-if="task.status == 4">Finshing</span>
        <h5>{{ task.name }}</h5>
        <h6>{{ task.desciption }}</h6>
      </div>
    </div>
  </div>
</template>
  
<script>
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers('Tasks')

export default {
  name: 'SingleTask',

  data() {
    return {
      task: {}
    }
  },


  methods: {
    ...mapActions(['getSingleTask'])
  },

  mounted() {
    this.getSingleTask(this.$route.params.taskId).then((task) => {
      this.task = task
    })
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
  font-size: 11px;
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
  