<template>
  <div id="newList">
    <div class="container">
      <div class="main">
        <div class="title">
          <h4>新闻资讯</h4>
          <p>News</p>
        </div>
        <ul v-for="news in allNewS">
          news


        </ul>
        <ul>


          <li class="one">
            <a href="#">
              <new-post></new-post>
              <!--<img src="../../static/img/new-cont.jpg" />-->
              <!--<div class="news-title">-->
                <!--<h5>新闻资讯</h5>-->
                <!--<p>News information</p>-->
                <!--<i class="icon-news"></i>-->
              <!--</div>-->
            </a>
          </li>
          <li class="two">
            <a href="#">
              <div class="top">
                <h5>微信支付HTTPS服务器更换证书对使用微信支付用户的影响解疑</h5>
                <div class="p">
                  <p>2018年3月8日，微信支付商户平台发布公告：微信支付HTTPS服务器计划于2018年5月29日更换服务器SSL证书，为避免下单、退款等功能无法使用，微信支付要求商户平台开发人员尽快验证商户服务器是否</p>
                </div>
                <img src="../../static/img/new-jiantou.jpg">
              </div>
              <div class="bottom">
                <h3>23</h3>
                <span>2018.03</span>

              </div>
            </a>
            <a href="#">
              <div class="top">
                <h5>商创网络荣获国家高新技术企业认证</h5>
                <div class="p">
                  <p>近日，上海商创网络科技有限公司通过了由上海市科学技术委员会、上海市财政局和上海市国家税务局组织的国家高新技术企业认定，并荣获国家“高新技术企业”称号。据悉，此次国家级、市级高新技术企业认定是根据科技部..</p>
                </div>
                <img src="../../static/img/new-jiantou.jpg">
              </div>
              <div class="bottom">
                <h3>21</h3>
                <span>2018.03</span>
              </div>
            </a>
          </li>
          <li class="three">
            <a href="#">
              <div class="left">
                <h3>27</h3>
                <span>2017.05</span>
              </div>
              <div class="right">
                <h5>相信你一定也知道，小程序又双叒叕升级了！</h5>
                <img src="../../static/img/new-jiantou.jpg" />
              </div>
            </a>
            <a href="#">
              <div class="left">
                <h3>31</h3>
                <span>2017.01</span>
              </div>
              <div class="right">
                <h5>微信小程序已陆续推出13项新能力，商家care吗？</h5>
                <img src="../../static/img/new-jiantou.jpg" />
              </div>
            </a>
            <a href="#">
              <div class="left">
                <h3>28</h3>
                <span>2017.08</span>
              </div>
              <div class="right">
                <h5>微信也着陆了，新零售时代真的要来了？</h5>
                <img src="../../static/img/new-jiantou.jpg" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import newPost from "./newPost"
  import axios from "axios"

  export default {
    name:"newList",
    components:{
      newPost
    },
    data () {
      return {
        allNewS: null,
      }
    },
    mounted () {
      axios
        .get('http://c.m.163.com/nc/article/headline/T1348647853363/0-40.html')
        .then(response => (this.allNewS = response))
    }

  }
</script>

<style>
  .el-main::-webkit-scrollbar {
    display: none;
  }
  .el-main {
    line-height: normal;
    text-align:left;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: "microsoft yahei";
    box-sizing: border-box;
    /*line-height: 21px;*/
  }

  img {
    border: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    background: #f3f3f3;
    padding: 80px 0 100px 0;
    overflow: hidden;
  }

  .main {
    max-width: 1340px;
    margin: 0 auto;
  }

  .main .title {
    margin-bottom: 40px;
    text-align: center;
  }

  .main .title h4 {
    font-size: 28px;
    position: relative;
    font-weight: 700;
    padding-bottom: 5px;
  }

  .main .title h4:before {
    left: 38%;
    content: " ";
    display: block;
    border-bottom: 1px solid #797979;
    width: 68px;
    position: absolute;
    margin-left: -.8rem;
    top: 50%;
    margin-top: -1px;
  }

  .main .title h4:after {
    content: " ";
    display: block;
    border-bottom: 1px solid #797979;
    width: 68px;
    position: absolute;
    margin-left: -.8rem;
    top: 50%;
    margin-top: -1px;
    right: 38%;
  }

  .main .title p {
    font-size: 16px;
    color: #999;
  }

  .main ul li {
    float: left;
  }

  .main ul li.one {
    width: 440px;
    margin-right: 10px;
  }

  .main ul li.one a {
    width: 440px;
    height: 530px;
    overflow: hidden;
    display: block;
    position: relative;
  }

  .main ul li.one a img {
    transform: scale(1);
    transition: all .4s;
    width: 100%;
    display: block;
  }

  .main ul li.one .news-title {
    bottom: 50px;
    left: 35px;
    width: 100%;
    border-left: 1px solid #fff;
    padding-left: 20px;
    color: #fff;
    position: absolute;
  }

  .main ul li.one .news-title h5 {
    font-size: 28px;
    font-weight: 700;
  }

  .main ul li.one .news-title p {
    font-size: 16px;
    letter-spacing: 2px;
  }

  .main ul li.one a:hover img {
    transform: scale(1.05);
  }

  .main ul li.one a:hover .icon-news {
    background-position: 0 -17px;
  }

  .main ul li.two {
    float: left;
    width: 440px;
    margin-right: 10px;
  }

  .main ul li.two a {
    width: 440px;
    height: 260px;
    padding: 38px 44px;
    margin-bottom: 10px;
    display: block;
    overflow: hidden;
    position: relative;
    background: #fff;
  }

  .main ul li.two .top {
    width: 100%;
    float: initial;
    padding-left: 0;
  }

  .main ul li.two .top h5 {
    font-size: 18px;
    color: #000;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
  }

  .main ul li.two .top div.p {
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 24px;
  }

  .main ul li.two .top div.p p {
    height: 52px;
    padding-top: 10px;
    font-size: 14px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .main ul li.two .top img {
    position: absolute;
    top: 50%;
    right: 67px;
    margin-top: 62px;
  }

  .main ul li.two .bottom {
    width: 100%;
    float: initial;
    border-right: none;
  }

  .main ul li.two .bottom h3 {
    padding-top: 20px;
    font-size: 32px;
    font-weight: 700;
    color: #999;
  }

  .main ul li.two .bottom h3:after {
    content: " ";
    display: block;
    border-bottom: none;
    width: 0;
    margin: 0;
  }

  .main ul li.two .bottom span {
    font-size: 14px;
    display: block;
    color: #999;
  }

  .main ul li.three {
    float: left;
  }

  .main ul li.three a {
    width: 440px;
    height: 170px;
    padding: 38px 44px;
    margin-bottom: 10px;
    display: block;
    background: #fff;
    overflow: hidden;
  }

  .main ul li.three a .left {
    width: 26%;
    border-right: 1px solid #eeeeee;
    float: left;
  }

  .main ul li.three a .left h3 {
    font-size: 32px;
    color: #999;
    font-weight: 700;
  }

  .main ul li.three a .left h3:after {
    content: " ";
    display: block;
    border-bottom: 1px solid #ccc;
    width: 20px;
    margin: 10px 0;
  }

  .main ul li.three a .left span {
    font-size: 14px;
    display: block;
    color: #999;
  }

  .main ul li.three a .right {
    width: 73%;
    padding-left: 25px;
    float: left;
  }

  .main ul li.three a .right h5 {
    font-size: 18px;
    color: #000;
    font-weight: 400;
  }

  .main ul li.three a .right img {
    padding-top: 20px
  }

  .main ul li.two a:hover,
  .main ul li.three a:hover {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .1);
  }

  .icon-news {
    /*background: url(../images/icon.png) no-repeat;*/
    width: 15px;
    height: 15px;
    display: inline-block;
    opacity: 1;
    filter: alpha(opacity=100);
    position: absolute;
    right: 100px;
    bottom: 2px;
  }

</style>
