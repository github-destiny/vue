// 引入核心库
import Vue from 'vue';
import Vuex from 'vuex';
// 使用Vuex插件
Vue.use(Vuex);

const actions = {
    clearAll(context) {
        let completed = context.state.todoList.reduce((acc, current) => acc + (current.done ? 1 : 0), 0);
        if (!completed){
            alert('没有完成的事项');
            return;
        }else{
            context.commit('CLEAR_ALL');
        }
    }

}

const mutations = {
    ADD_TODO(state, value){
        state.todoList.unshift(value);
    },
    TOGGLE(state, value){
        state.todoList.forEach((todo)=>{
            if(todo.id === value) todo.done = !todo.done
        })
    },
    DEL_TODO(state, value){
        state.todoList = state.todoList.filter((todo)=>{
            return todo.id !== value
        })
    },
    TOGGLE_ALL(state, value) {
        state.todoList.forEach((todo)=>{
            todo.done = value
        })
    },
    CLEAR_ALL(){
        state.todoList = state.todoList.filter((todo)=>{
            return !todo.done
        })
    }
}

const state = {
    todoList : JSON.parse(localStorage.getItem('todoList')) || []
}

const getters = {
    toggleList(){

    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
