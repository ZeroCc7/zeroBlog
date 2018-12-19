<template>
  <div id="Home">
    <div class="post-layout-list" >
      <div class="status_list_item">
        <div class="status_user" :style="{backgroundImage:`url(${img})`}">
          <div class="status_section">
            <a href="detail.html" class="status_btn">交代是不可能交代的</a>
            <p class="section_p">相隔上一次的更新我掰手指数一数，下意识的双腿一软，给各位小哥哥小姐姐们跪下了。自从有了对象后，周末几乎落下了主题的进度（邪魅的笑）。一边开发新的主题，一边收集您们给我反馈回来的"臭虫"，还有新的主题后台看见了一些大神在... </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import leftBar from "./bar"
  export default {
    name:"home",
    components:{
      leftBar
    },
    data () {
      return {
        img: require('../static/img/ph.jpg')
      }
    }

  }
</script>

<style>
  .post-layout-list {
    max-width: 800px;
    margin: auto
  }
  .status_list_item {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  }
  .post.review .review-item {
    min-height: 175px!important
  }
  .status_list_item {
    color: #fff;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }
  .status_list_item {
    position: relative;
    width: 100%;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(249, 249, 249, 0.08), 0 0 0 1px rgba(26, 53, 71, .04), 0 1px 1px rgba(26, 53, 71, .06)
  }

  .status_list_item p {
    margin-bottom: 0
  }

  .status_user {
    background-size: contain;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: right center;
    border-radius: 6px;
    padding: 25px 20% 25px 2%;
  }

  .status_user:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    top: 0;
    left: 0;
    background: -webkit-linear-gradient(right, rgba(255, 255, 255, 0) 0%, #fff 20%);
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, #fff 20%)
  }

  .status_user {
    background-position: center;
    background-size: cover!important;
    padding: 1.3rem 1.3rem 2rem!important
  }
  .status_user:after {
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.2) url(../static/img/dot.png) repeat!important
  }
</style>
