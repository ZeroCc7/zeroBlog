<template>
  <div id="Home">
   Home
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
