<template>
  <div id="Home">
    <blogTable></blogTable>
  </div>
</template>

<script>
  import blogTable from "./table/bolg-list"
  export default {
    name:"home",
    components:{
      blogTable
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
