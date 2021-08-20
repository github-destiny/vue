<template>
    <el-container>
        <el-input v-model="keywords" @change="getSongList" suffix-icon="el-icon-search" placeholder="请输入歌曲名或歌手名"></el-input>
    </el-container>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Search",
        data(){
            return {
                keywords : ''
            }
        },
        methods : {
            getSongList(){
                axios.post(`http://1.15.140.216:9999/cloudsearch?keywords=${this.keywords}&offset=0`).then(
                    response => {
                        // this.$store.state.songList = response.data.result.songs;
                        this.$store.commit('PUT_SONGS', response.data.result.songs);
                    },
                    error => {
                        console.log(error.message);
                    }
                )
                this.$store.state.lastKeyword = this.keywords;
                this.keywords = '';
            },
            test(){
                console.log("事件正常触发");
            }
        }
    }
</script>

<style scoped>

</style>
