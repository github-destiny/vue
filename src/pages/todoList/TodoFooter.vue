<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="toggleFlag"/>
        </label>
        <span>
          <span>已完成{{completed}}</span> / 全部{{todoList.length}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex'
    export default {
        name: "TodoFooter",
        methods: {
            ...mapMutations(['TOGGLE_ALL']),
            ...mapActions(['clearAll'])
        },
        computed : {
            ...mapState(['todoList']),
            completed(){
                return this.todoList.reduce((acc, current) => acc + (current.done ? 1 : 0), 0);
            },
            toggleFlag : {
                get(){
                    return this.completed === this.todoList.length && this.completed > 0;
                },
                set(value){
                    this.TOGGLE_ALL(value);
                }
            }
        },
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>
