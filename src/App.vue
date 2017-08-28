<template lang="jade">
  #app
    tt-appbar(title="Home")
      span(slot="title")
        img(src="/static/img/logo.png")
      span(slot="right")
        tt-flat-button(@click="toggleMenu")
          span(slot="label")
            i.icon.content.fitted.large
    router-view
</template>

<script>
import appbar from "@/components/ttui/appbar/appbar"
import flatButton from "@/components/ttui/button/flat-button"

export default {
  name: 'app',
  components: {
    "tt-appbar": appbar,
    "tt-flat-button" : flatButton
  },
  methods:{
    toggleMenu(){
      alert();
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
