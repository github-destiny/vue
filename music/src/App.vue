<template>
  <el-container>
    <!--侧边栏展示音乐列表-->
    <el-aside class="side-hidden">
      <List/>
    </el-aside>
    <el-container>
      <el-header>
        <Search/>
      </el-header>
      <el-main>
        <SongPlayer/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import List from "./components/List";
import Search from "./components/Search";
import SongPlayer from "./components/SongPlayer";
export default {
  name: 'App',
  components: {
    SongPlayer,
    Search,
    List
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body{
    overflow: hidden;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  .side-hidden{
    overflow-x: hidden;
  }
</style>
