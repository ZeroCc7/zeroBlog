<template>
  <div id="persion">
    <div class="user-info">
      <img src="../../static/img/photo.jpg"/>
      <div class="login-name">ZeroCc</div>
      <div ></div>
    </div>
    <ul class="other-site">
      <li><img data-v-007cfd86="" src="../../static/img/github.png"></li>
      <li><img data-v-007cfd86="" src="../../static/img/weibo.png"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "persion"
  }
</script>

<style scoped>
  .user-info {
    flex: 0 0 150px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .user-info img {
    width: 70px;
    flex: 0 0 70px;
    border-radius: 35px;
    cursor: pointer;
  }

  .user-info .login-name {
    margin-top: 14px;
    margin-bottom: 12px;
    font-size: 14px;
    flex: 0 0 16px;
    line-height: 16px;
    color: #4b595f;
  }

  .user-info :last-child {
    font-size: 13px;
    margin: 0 20px;
    flex: 0 0 18px;
    line-height: 18px;
    color: #849aa4;
  }
  .other-site {
    margin-top: 20px;
    margin-bottom: 67px;
    list-style: none;
    flex: 0 0 20px;
    display: flex;
    justify-content: center;
  }
  .other-site li img {
    width: 25px;
    height: 25px;
  }
  .other-site li {
    cursor: pointer;
    margin-right: 20px;
  }


</style>
