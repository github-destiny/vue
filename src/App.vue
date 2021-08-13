<template>
  <div id="app">
    <Header class="header"/>
    <div class="content">
      <Sidebar class="sidebar"/>
      <Inner class="routerView"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Inner from "./components/Inner";
export default {
  name: 'App',
  components: {
    Header,
    Sidebar,
    Inner
  },

}
</script>

<style>
  body{
    height: 100vh;
    overflow: hidden;
  }
  #app{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .content{
    height: 100%;
    display: flex;
  }
  .header{
    height: 10%;
  }
  .sidebar{
    height: 98%;
  }
  .routerView{
    border: 1px solid #333;
    width: 85%;
    padding: 20px;
    overflow: auto;
  }
</style>
