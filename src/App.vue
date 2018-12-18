<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <router-link to="/home" clas="btn-ui">Home</router-link>
        <router-link to="/weather" clas="btn-ui">今日天气</router-link>
        <router-link to="/news" clas="btn-ui">今日新闻</router-link>
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
export default {

}
</script>

<style>

</style>
