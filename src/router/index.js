import VueRouter from "vue-router";

// 引入组件的位置
import Todo from "../pages/Todo";
import Github from "../pages/github/Github";
import Vuex from "../pages/vuex-sum/Vuex";

export default new VueRouter({
    routes : [
        {
            path : '/todoList',
            component : Todo
        },
        {
            path : '/github',
            component : Github
        },
        {
            path : '/vuex',
            component : Vuex
        }
    ]
})
