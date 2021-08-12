<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="TOGGLE(todo.id)" />
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="DEL_TODO(todo.id)">删除</button>
    </li>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "TodoItem",
        props : ['todo'],
        methods : {
            ...mapMutations(['TOGGLE', 'DEL_TODO'])
        }
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>
