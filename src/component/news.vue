<template>
  <div id="news">
    <!--This is News!-->
    <el-row :gutter="20">
      <el-col :span="12">
        <newPost></newPost>
      </el-col>
      <el-col :span="10">
        <weather></weather>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import newPost from "./news/newPost"
  import weather from "./weather"
  export default {
    name: "news",
    components: {
      newPost,
      weather
    }
  }
</script>

<style scoped>

</style>
