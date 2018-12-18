<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside heigth="100%" width="200px">
        <left-bar></left-bar>
        <!--<router-link to="/home" clas="btn-ui">Home</router-link>-->
        <!--<router-link to="/weather" clas="btn-ui">今日天气</router-link>-->
        <!--<router-link to="/news" clas="btn-ui">今日新闻</router-link>-->
      </el-aside>
      <el-container>

        <el-header>

        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import leftBar from "./component/bar"
  export default {
    components:{leftBar}
  }
</script>

<style>
  html{
    height:100%;
  }

  body{
    height:100%;
    margin:0;
  }

  #app{
    height:100%;
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
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
