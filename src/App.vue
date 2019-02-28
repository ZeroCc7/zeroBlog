<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <persion></persion>
      </el-aside>
      <el-container style="height: 100%">
        <el-header>
          <topBar></topBar>
        </el-header>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-aside heigth="100%" width="200px">
          </el-aside>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import leftBar from "./component/bar"
  import topBar from "./component/topBar"
  import persion from "./component/person/infomation"
  export default  {
    components:{leftBar,topBar,persion}
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
    background-color: #545C64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    border: #424d4d;
    border-width: 1px;
    border-right-style:solid;
  }

  .el-main {
    background-color: #f3f3f3;
    color: #333;
    text-align: center;
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
