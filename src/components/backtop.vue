<template lang="jade">
    button.raised-button.fix(@click="goTop", v-if="isShow")
        i.icon.caret.up
        span TOP
</template>
<script>
export default {
    name: "backtotop",
    data(){
        return {
            isShow: false
        }
    },
    mounted: function() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        goTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        handleScroll() {
            this.isShow = document.body.scrollTop > 20 ? true : false;
        },
    }
}
</script>
<style scoped lang="scss">
.fix {
    position: fixed;
    bottom: 2px;
    right: 2px;
    background-color: #DDD
}
</style>
