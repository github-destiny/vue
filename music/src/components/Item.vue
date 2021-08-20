<template>
    <el-card class="box-card" style="width: 95%" shadow="hover">
        <div slot="header" class="clearfix">
            <el-image :src="song.al.picUrl" style="width: 10%" alt="" fit="scale-down"></el-image>
            {{song.ar[0].name}}
        </div>
        <div class="text item">
            <span>{{song.name}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="play">
                <i class="el-icon-video-play" v-if="!state"></i>
                <i class="el-icon-video-pause" v-else></i>
            </el-button>
        </div>
    </el-card>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Item",
        props : ['song'],
        data(){
            return {
                state : false
            }
        },
        methods : {
            play(){
                if(!this.state){
                    axios.get(`http://1.15.140.216:9999/song/url?id=${this.song.id}`).then(
                        response => {
                            // this.$store.state.currentSongSrc = response.data.data[0].url;
                            // this.$store.state.currentSongId = response.data.data[0].id;
                            this.$store.commit("UPDATE_STATE", {'currentSongId' : response.data.data[0].id, 'lastKeyword' : 'aaa'})
                            this.state = true;
                        },
                        error => {
                            console.log(error.message);
                        }
                    )
                }else{
                    this.$store.state.currentSongSrc = '';
                    this.state = false;
                }

            }
        }
    }
</script>

<style scoped>
    .songName{
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .bg{
        padding: 2px;
        background-color: skyblue;
        border-radius: 10px;
    }
    i{
        margin-top: 1%;
    }
</style>
