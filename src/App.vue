<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <topBar></topBar>
      </el-header>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-aside heigth="100%" width="200px">
          <!--<left-bar></left-bar>-->
          <!--<router-link to="/home" clas="btn-ui">Home</router-link>-->
          <!--<router-link to="/weather" clas="btn-ui">今日天气</router-link>-->
          <!--<router-link to="/news" clas="btn-ui">今日新闻</router-link>-->
        </el-aside>
      </el-container>

    </el-container>
  </div>
</template>

<script>
  import leftBar from "./component/bar"
  import topBar from "./component/topBar"
  export default {
    components:{leftBar,topBar}
  }
</script>

<style>

</style>
