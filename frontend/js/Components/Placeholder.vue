<template>
    <b-container v-drag-and-drop:options="options">
        <AddTaskModal></AddTaskModal>
        <b-row class="text-center">
            <b-col class="my-3">
               <b-button size="lg" variant="outline-primary" v-b-modal="'add-modal'">Add task</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col id="todo" class="columns bg-primary rounded mr-2" data-status="TODO">
                <h1 class="text-center"><b-badge variant="primary">TODO</b-badge></h1>
                <TaskCard
                    v-for="task in todoTasks"
                    :key="task.id"
                    :data-id="task.id"
                    :id="task.id"
                    :name="task.name"
                    :description="task.description"
                    no-body
                    class="task-card text-center"></TaskCard>
            </b-col>
            <b-col id="done" class="columns bg-success rounded" data-status="DONE">
                <h1 class="text-center"><b-badge variant="success">DONE</b-badge></h1>
                <TaskCard
                    v-for="task in doneTasks"
                    :key="task.id"
                    :data-id="task.id"
                    :id="task.id"
                    :name="task.name"
                    :description="task.description"
                    no-body
                    class="task-card text-center"></TaskCard>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Vue from 'vue';
    import { Layout, Button } from 'bootstrap-vue/es/components';
    import TaskCard from './TaskCard.vue';
    import AddTaskModal from './AddTaskModal.vue';
    import VueDraggable from 'vue-draggable';
    import { mapState, mapActions, mapGetters } from 'vuex'
    import {TODO_STATUS, DONE_STATUS} from '../constants';
    import store from '../store';

    Vue.use(VueDraggable);
    Vue.use(Layout);
    Vue.use(Button);

    export default {
        name: "Placeholder",
        components: {
            TaskCard,
            AddTaskModal
        },
        mounted(){
            this.$store.dispatch('fetchTasks');
        },
        methods: {
            updateTask(task) {
                this.$store.dispatch('updateTask', task);
            },
        },
        computed: mapGetters(['doneTasks', 'todoTasks']),
        data() {
            return {
                tasks: [],
                options: {
                    dropzoneSelector: '.columns',
                    draggableSelector: '.task-card',
                    excludeOlderBrowsers: true,
                    multipleDropzonesItemsDraggingEnabled: false,
                    showDropzoneAreas: true,
                    onDrop: function(event) {
                        const id = event.items[0].dataset.id;
                        const status = event.droptarget.dataset.status;
                        store.dispatch('updateTask', {id, status});
                    },
                }
            }
        }
    }
</script>

<style scoped>
</style>