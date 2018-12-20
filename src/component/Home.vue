<template>
  <div id="Home">
    {{info}}
  </div>
</template>

<script>
  import leftBar from "./bar"
  import axios from "axios"
  export default {
    name:"home",
    components:{
      leftBar
    },
    data () {
      return {
        info: null
      }
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted () {
      axios
        // .get('/api/movie/top250')
        .get('/api/0-40.html')
        .then(response => (this.info = response))
        .catch(err=>{
          console.log(err)
        })
    }

  }
</script>
