import Vue from 'vue';
import Vuex from 'vuex';
import {TODO_STATUS, DONE_STATUS} from './constants';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        }
    },
    actions: {
        fetchTasks ({ commit }) {
            fetch('/tasks/').then((response) => {
                response.json().then((data) => {
                    commit('setTasks', data);
                });
            })
        },
        addTask ({ commit, dispatch }, task) {
            fetch('/tasks/', {
               method: 'POST',
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify(task)
            }).then((response) => {
                dispatch('fetchTasks');
            })
        },
        deleteTask ({ commit, dispatch }, id) {
            fetch(`/tasks/${id}`, {
               method: 'DELETE',
            }).then((response) => {
                dispatch('fetchTasks');
            })
        },
        updateTask ({ commit, dispatch }, statusChange) {
           fetch(`/tasks/${statusChange.id}`, {
               method: 'PATCH',
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({status: statusChange.status})
           }).then((response) => {
               dispatch('fetchTasks');
           });
        },
    },
    getters: {
        todoTasks: (state) => {
            return state.tasks.filter(t => t.status === TODO_STATUS)
        },
        doneTasks: (state) => {
            return state.tasks.filter(t => t.status === DONE_STATUS)
        },
    }
})