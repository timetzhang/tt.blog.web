<template lang="jade">
    button.raised-button.fix(@click="goTop")
        i.icon.caret.up
        span TOP
</template>
<script>
export default {
    name: "backtotop",
    methods: {
        goTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>
<style scoped lang="scss">
.fix{
    position: fixed;
    bottom: 2px;
    right: 2px;
    background-color: #DDD
}
</style>
