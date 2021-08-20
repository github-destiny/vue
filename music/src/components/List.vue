<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>歌曲列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <ul v-infinite-scroll="loadSong" infinite-scroll-immediate="false" infinite-scroll-delay="1000">
            <li v-for="song in songList" :key="song.id" class="text item">
                <Item :song="song"/>
            </li>
        </ul>
        <p v-show="loading">加载中</p>
    </el-card>
</template>

<script>
    import {mapState} from 'vuex';
    import axios from 'axios';
    import Item from "./Item";
    export default {
        name: "List",
        data(){
            return {
                offset : 0,
                loading : false
            }
        },
        components : {Item},
        computed : {
            ...mapState(['songList','lastKeyword'])
        },
        methods : {
            loadSong(){
                this.loading = true;
                console.log(this.loading);
                setTimeout(()=>{
                    ++this.offset;
                    axios.post(`http://1.15.140.216:9999/cloudsearch?keywords=${this.lastKeyword}&offset=${this.offset}`).then(
                        response => {
                            // this.$store.state.songList = response.data.result.songs;
                            this.$store.commit('PUT_SONGS', response.data.result.songs);
                            this.loading = false;
                        },
                        error => {
                            console.log(error.message);
                        }
                    )
                }, 1000)
            }
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
        overflow: hidden;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
    }
</style>
