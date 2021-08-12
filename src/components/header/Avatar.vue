<template>
    <div class="avatar">
        <img :src="src" alt="这是我头像" title="头像">
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props : ['src']
    }
</script>

<style scoped>
    .avatar {
        width: 45px;
        height: 45px;
    }
    .avatar img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        /*position: absolute;
        right: 50px;
        top: 20px;*/
    }
</style>
