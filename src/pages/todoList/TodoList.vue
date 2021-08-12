<template>
    <ul class="todo-main">
        <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
    </ul>
</template>

<script>
    import {mapState} from 'vuex';
    import TodoItem from "./TodoItem";
    export default {
        name: "TodoList",
        components: {TodoItem},
        computed : {
            ...mapState(['todoList'])
        },
        watch : {
            todoList : {
                deep : true,
                handler(val){
                    localStorage.setItem('todoList', JSON.stringify(val));
                }
            }
        }
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>
