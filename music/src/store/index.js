import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

const actions = {

}

const mutations = {
    PUT_SONGS(state, value){
        state.songList.length === 0 ? state.songList = value : state.songList.push(...value);
    },
    UPDATE_STATE(state, value){
        // console.log(state);
    }
}

const state = {
    songList : [],
    lastKeyword : '',
    currentSongSrc : '',
    cookie : 'MUSIC_U=d5b58733a34d2e146f5569f4d83bc6abd79d83ff732a7b7d1ee40e34631437179cb4377b2d7ba249; Max-Age=1296000; Expires=Thu, 2 Sep 2021 05:21:09 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Thu, 2 Sep 2021 05:21:09 GMT; Path=/;;__csrf=3b60e1405aa02bccd28933e42b35f47f; Max-Age=1296010; Expires=Thu, 2 Sep 2021 05:21:19 GMT; Path=/;',
    token : 'd5b58733a34d2e146f5569f4d83bc6abd79d83ff732a7b7d1ee40e34631437179cb4377b2d7ba249',
    currentSongId : ''
}

const getters = {

}

export default new vuex.Store({
    actions,
    mutations,
    state,
    getters
})
