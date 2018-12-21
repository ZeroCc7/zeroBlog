<template>
  <div id="Home">
    {{info}}
  </div>
</template>

<script>
  export default {
    name:"home",
    components:{

    },
    data () {
      return {
        info: "首页玩啥"
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    }
  }
</script>
