<template>
    <div>
        <input v-model="name" type="text" placeholder="enter the name you search"/>&nbsp;
        <button @click="getUserList">Search</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "InputComponent",
        data(){
            return {
                name : ''
            }
        },
        methods : {
            getUserList(){
                this.$store.dispatch('updateUserList', {users : [], isFirst : false, isLoading : true})
                setTimeout(()=>{

                }, 1000)
                axios.get(`https://api.github.com/search/users?q=${this.name}`).then(
                    response => {
                        this.$store.dispatch('updateUserList', {users : response.data.items, isFirst : false, isLoading : false})
                    },
                    error => {
                        this.$store.dispatch('updateUserList', {users : [], isFirst : false, isLoading : false, errMsg : error.message})
                    }
                )
                this.name = '';
            },
        }
    }
</script>

<style scoped>

</style>
