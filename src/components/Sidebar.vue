<template>
    <div class="sidebar">
        <router-link class="link" to="/todoList">todoList</router-link>
        <br>
        <router-link class="link" to="/github">github</router-link>
        <br>
        <router-link class="link" to="/vuex">vuex</router-link>
    </div>
</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
    .sidebar {
        width: 15%;
        border: 1px solid #333;
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .link{
        text-decoration: none;
        color: gray;
    }
    .link:hover{
        color: #41B883;
    }
</style>
