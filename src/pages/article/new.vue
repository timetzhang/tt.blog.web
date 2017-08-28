<template lang="jade">
  div.input
    input(v-model="article.name",placeholder="Name", style="width:98%")
    br
    input(v-model="article.image",placeholder="Head Image", style="width:98%")
    br
    br
    textarea(v-model="article.brief", placeholder="Brief", rows="4", style="width:97%")
    br
    select(name="category", style="margin-top:10px", v-model="article.category")
      option(value="think") Think
      option(value="science") Science
      option(value="music") Music
      option(value="code") Code
      option(value="design") Design
    br
    br
    ueditor(@ready="editorReady")
    br
    .center.aligned
      button.raised-button(@click="submit", style="width:200px") Submit
</template>

<script>
import Datetime from '@/common/datetime'
import Ueditor from 'vue-ueditor'

export default {
  name: 'article-details',
  components: {
    'ueditor': Ueditor
  },
  data() {
    return {
      article: {
        name: '',
        brief: '',
        image: '',
        details: '',
        category: ''
      }
    }
  },
  created: function() {

  },
  methods: {
    editorReady(editorInstance) {
      editorInstance.addListener('contentChange', () => {
        this.article.details = editorInstance.getContent();
      })
    },
    async submit() {
      if (this.article.name && this.article.brief && this.article.details && this.article.category) {
        let result = await this.$db.newArticle(this, this.article)
        if (parseInt(result.insertedCount) > 0) {
          this.$router.push('/')
        }

      }
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">

</style>
