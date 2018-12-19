<template>
  <div id="news">
    <!--This is News!-->
    <!--<el-row :gutter="20">-->
      <!--<el-col :span="12">-->
        <!--<newPost></newPost>-->
      <!--</el-col>-->
      <!--<el-col :span="10">-->
        <!--<weather></weather>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <el-row :gutter="20">
      <el-col :span="24">
        <new-list></new-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import newPost from "./news/newPost"
  import weather from "./weather"
  import newList from "./news/newsList"
  export default {
    name: "news",
    components: {
      newPost,
      weather,
      newList
    }
  }
</script>

<style scoped>

</style>
