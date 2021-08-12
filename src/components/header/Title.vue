<template>
    <h2>{{title}}</h2>
</template>

<script>
    export default {
        name: "Title",
        props : ['title']
    }
</script>

<style scoped>
    h2{
        text-align: center;
    }
</style>
