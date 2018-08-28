<template>
  <b-modal id="add-modal" title="Add task" @ok="handleOk" @cancel="clearForm" :ok-disabled="!name.length">
      <b-form-group>
        <b-form-input id="name"
                      type="text"
                      v-model="name"
                      required
                      placeholder="Enter task name">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-textarea id="description"
                     v-model="description"
                     placeholder="Enter description"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
      </b-form-group>
  </b-modal>
</template>

<script>
    import Vue from 'vue';
    import { Modal, Form } from 'bootstrap-vue/es/components';
    import { TODO_STATUS } from '../constants';
    Vue.use(Modal);
    Vue.use(Form);

    export default {
        name: "AddTaskModal",
        data () {
            return {
                name: '',
                description: ''
            }
        },
        methods: {
          clearForm (event) {
              this.name = '';
              this.description = '';
          },
          handleOk (event) {
            this.$store.dispatch('addTask', {
                name: this.name, description: this.description, status: TODO_STATUS}
            );
            this.clearForm();
          },
        }
    }
</script>

<style scoped>

</style>