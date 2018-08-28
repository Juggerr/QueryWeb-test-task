<template>
    <b-card
            bg-variant="light"
            class="text-center m-3"
    >
        <b-row slot="header">
            <b-col cols="2">
                <b-button class="float-left" size="sm" variant="warning" @click="toggleEditMode">&#9998;</b-button>
            </b-col>
            <b-col cols="8">
                <h5 v-show="!editMode">{{task.name}}</h5>
                <b-form-input
                      v-show="editMode"
                      id="name"
                      type="text"
                      v-model="task.name"
                      @blur.native="toggleEditMode"
                >
                </b-form-input>
            </b-col>
            <b-col cols="2">
                <b-button class="float-right" size="sm" variant="danger" @click="deleteTask">&#9747;</b-button>
            </b-col>
        </b-row>
        <p class="card-text text-justify description" v-show="!editMode">{{task.description}}</p>
        <b-form-textarea id="description"
             v-model="task.description"
             v-show="editMode"
             :rows="3"
             :max-rows="6"
             @blur.native="toggleEditMode">
        </b-form-textarea>
    </b-card>
</template>

<script>
    export default {
        name: "TaskCard",
        data() {
            return {
                editMode: false,
                task: {
                    name: '',
                    description: ''
                }
            }
        },
        props: [
            'id',
            'name',
            'description'
        ],
        mounted() {
            this.task = {name: this.name, description: this.description};
        },
        methods: {
            deleteTask() {
                this.$store.dispatch('deleteTask', this.id);
            },
            toggleEditMode() {
                if (this.editMode) {
                    this.commitChanges();
                }
                this.editMode = !this.editMode;
            },
            commitChanges() {
                const stateChange = Object.assign({id: this.id}, this.task);
                this.$store.dispatch('updateTask', stateChange);
            }
        }
    }
</script>

<style scoped>
    .description {
        white-space: pre-wrap;
        word-wrap: break-word;
        font-family: inherit;
    }
</style>