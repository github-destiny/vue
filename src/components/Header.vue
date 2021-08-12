<template>
    <div class="header">
        <Title title="This is my first demo" class="title"/>
        <Avatar src="/avatar.jpg" class="avatar"/>
    </div>
</template>

<script>
    import Title from "./header/Title";
    import Avatar from "./header/Avatar";
    export default {
        name: "Header",
        components : {
            Title,
            Avatar
        }
    }
</script>

<style scoped>
    .header{
        border: 1px solid #333;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10%;
    }
    .title{
        justify-items: center;
    }
    .avatar{
        position: absolute;
        right: 3%;
    }
</style>
