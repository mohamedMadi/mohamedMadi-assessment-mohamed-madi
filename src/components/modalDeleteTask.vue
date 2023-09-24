<template>
    <modal name="modalDelete" height="auto">
        <div class="bodyModal">
            <h3>Are You Soure Delete Task ?</h3>

            <div class="btnsAction">
                <button @click="$modal.hide('modalDelete')">Cancel</button>
                <button class="danger" @click="submitDeleteTask">Delete</button>
            </div>
        </div>
    </modal>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const  { mapActions }  = createNamespacedHelpers('Tasks')

export default {
    props:['taskId'],

    methods: {
        ...mapActions(['deleteTaskFromState']),
        async submitDeleteTask() {
            this.deleteTaskFromState(this.taskId).then(() => {
                this.$noty.success("Your tasl has been removed!")
                this.$modal.hide('modalDelete')
            })
        }
    }
}
</script>