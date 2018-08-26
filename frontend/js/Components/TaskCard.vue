<template>
    <b-card
            bg-variant="light"
            class="text-center m-3"
    >
        <b-row slot="header">
            <b-col cols="10"><h5>{{name}}</h5></b-col>
            <b-col cols="2">
                <b-button class="float-right" size="sm" variant="danger" @click="deleteTask">&#9747;</b-button>
            </b-col>
        </b-row>
        <p class="card-text">{{description}}</p>
    </b-card>
</template>

<script>
    export default {
        name: "TaskCard",
        props: [
            'id',
            'name',
            'description'
        ],
        methods: {
            deleteTask() {
                this.$store.dispatch('deleteTask', this.id);
            }
        }
    }
</script>

<style scoped>

</style>