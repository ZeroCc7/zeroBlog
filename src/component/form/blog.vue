<template>
  <div>
    博客标题：
    <el-input placeholder="请输入内容" refix-icon="el-icon-edit" v-model="input21"> </el-input>
    内容：
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
  </div>

</template>

<script>
    export default {
        name: "blog"
    }
</script>

<style scoped>

</style>
