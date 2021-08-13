<template>
    <div id="app">
        <div class="container">
            <section class="jumbotron">
                <h3 class="jumbotron-heading">Search Github Users</h3>
                <InputComponent/>
            </section>
            <div class="row">
                <h2 v-show="isFirst">欢迎使用</h2>
                <h2 v-show="isLoading">正在加载...</h2>
                <h2 v-show="errMsg">{{errMsg}}</h2>
                <Card v-show="!isFirst" v-for="user in userList" :key="user.id" :user="user"/>
            </div>
        </div>
    </div>
</template>

<script>
    import InputComponent from "./github/InputComponent";
    import Card from "./github/Card";
    import {mapState} from 'vuex';
    export default {
        name: "Github",
        components: {Card, InputComponent},
        computed : {
            ...mapState(['userList', 'isFirst', 'isLoading', 'errMsg'])
        },
    }
</script>
<!--
    使用@import导入失败，为全局样式，采用标签形式引入，成功
-->
<style scoped src="../../public/css/bootstrap.css"></style>
<style scoped lang="less">
    /*@import '/css/bootstrap.css';*/

    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }

</style>
