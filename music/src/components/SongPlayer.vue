<template>
    <el-container>
        <audio autoplay :src="this.$store.state.currentSongSrc" controls></audio>
    </el-container>
</template>

<script>
    export default {
        name: "SongPlayer"
    }
</script>

<style scoped>

</style>
