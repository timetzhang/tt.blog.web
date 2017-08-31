<template lang="jade">
  div.input
    input(v-model="article.name",placeholder="Name", style="width:98%")
    br
    input(v-model="article.image",placeholder="Head Image", style="width:98%")
    br
    br
    textarea(v-model="article.brief", placeholder="Brief", rows="4", style="width:97%")
    br
    input(v-model="article.keywords",placeholder="Keywords", style="width:98%")
    br
    select(name="category", style="margin-top:10px", v-model="article.category")
      option(value="think") Think
      option(value="science") Science
      option(value="music") Music
      option(value="code") Code
      option(value="design") Design
      option(value="misc") Misc
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
  name: 'article-edit',
  components: {
    'ueditor': Ueditor
  },
  data() {
    return {
      article: {}
    }
  },
  created: async function() {
    this.article = (await this.$db.getArticleDetails(this, { id: this.$route.params.id })).details
    this.article.keywords = this.article.keywords.join(',')
  },
  methods: {
    editorReady(editorInstance) {
      editorInstance.setContent(this.article.details);
      editorInstance.addListener('contentChange', () => {
        this.article.details = editorInstance.getContent();
      })
    },
    async submit() {
      if (this.article.name && this.article.brief && this.article.details && this.article.category) {
        var keywords = new Array()
        this.article.keywords.split(',').forEach(function(element) {
          keywords.push(element.trim())
        }, this)
        this.article.keywords = keywords

        let result = await this.$db.setArticle(this, this.article)
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
