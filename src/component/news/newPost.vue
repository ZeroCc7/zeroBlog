<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div id="newPost">
      <el-carousel :interval="5000" arrow="always" id="leftPh">
        <el-carousel-item v-for="item in imgList">
          <img v-bind:src="item.url">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "newPost",
        data(){
          return{
            imgList: [
              // 图片需要引入, 否则无法显示
              {url: require('../../static/img/5006.jpg')},
              {url: require('../../static/img/5023.jpg')},
              {url: require('../../static/img/2.jpg')},
              {url: require('../../static/img/7977.jpg')}
            ]
          }
        }
    }
</script>

<style scoped>
  #leftPh{
    width: 98%;
    /*padding-left: 5%;*/
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  img{
    height: 100%;
    width: 100%;
  }

</style>
