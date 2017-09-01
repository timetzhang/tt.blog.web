<template lang="jade">
    div.center.aligned(style="margin:60px 0 40px 0")
        mu-circular-progress(:size="40")
        div.center.aligned 正在加载中...
</template>
<script>
export default {
    name: "loading",
    props: {

    },
    data() {
        return {

        }
    },
    methods: {
    },
    mounted() {

    }
}
</script>
<style scoped>

</style>
