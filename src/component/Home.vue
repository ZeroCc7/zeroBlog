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
        info: ""
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    }
  }
</script>
