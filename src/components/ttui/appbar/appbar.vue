<template lang="jade">
  div
    span
    
</template>

<script>
export default {
  name: 'tt-appbar',
  props:{
      title:{
          type:string,
          default: 'App'
      }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted:{
      
  },
  methods:{

  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
