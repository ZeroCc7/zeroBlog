<template>
  <div id="leftBar" >
    <el-col>
      <!--<h5>{{titleh5}}</h5>-->
      <el-menu default-active="2" router class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose" >
        <!--<router-link class="el-menu-item" to="/home">首页</router-link>-->
        <!--<router-link class="el-menu-item link" to="/weather">天气</router-link>-->
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/weather">
          <i class="el-icon-setting"></i>
          <span slot="title">今日天气</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          titleh5:"导航栏"
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  #leftBar{
    height: 100%;
  }
  #leftBar div{
    height: 100%;
  }
  #leftBar div ul{
    height: 100%;
  }

</style>
