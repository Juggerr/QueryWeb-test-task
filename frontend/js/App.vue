<template>
    <Placeholder></Placeholder>
</template>

<script>
    import Vue from 'vue';
    import App from './App.vue';
    import { Card, Layout, Badge } from 'bootstrap-vue/es/components';
    import Placeholder from './Components/Placeholder.vue';
    Vue.use(Card);
    Vue.use(Layout);
    Vue.use(Badge);

    export default {
        name: "App",
        components: {
            Placeholder
        }
    }
</script>

<style scoped>

</style>