<template>
    <div class="card">
        <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props : ['user']
    }
</script>

<style scoped>

</style>
