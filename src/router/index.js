import VueRouter from "vue-router";

// 引入组件的位置
import Todo from "../pages/Todo";
import Github from "../pages/Github";

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
    ]
})
