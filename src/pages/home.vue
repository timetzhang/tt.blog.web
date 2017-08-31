<template lang="jade">
  div
    router-link.article-list(v-for="item in articles", :key="item.id", :to="'/article/id=' + item._id")
      .image
          img(:src="item.image")
      .details
          .name {{item.name}}
          .meta
              div.time
                  i.icon.calendar
                  span {{item.time}}
              span &nbsp;
              div.view_count
                  i.icon.hand.pointer
                  span {{item.view_count}}
          .brief {{item.brief}}
</template>

<script>
import Datetime from '@/common/datetime'
import Browser from '@/common/browser'
export default {
  name: 'hello',
  data() {
    return {
      articles: [],
      category: this.$route.params.category,
      keyword: this.$route.params.keyword,
      isMobile: Browser.mobile
    }
  },
  mounted: async function() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      // load db
      if (!this.$route.params.category && !this.$route.params.keyword) {
        this.articles = await this.$db.getArticle(this, {});
      }
      if (this.$route.params.category) {
        this.articles = await this.$db.getArticle(this, { category: this.category })
      }
      if (this.$route.params.keyword) {
        this.articles = await this.$db.getArticle(this, { keyword: this.keyword })
      }
      // format the date
      this.articles.forEach(function(element) {
        element.time = Datetime.dateFormat(element.time)
      }, this);
    }
  },
  watch: {
    async '$route'() {
      if (this.$route.params.category)
        this.category = this.$route.params.category
      if (this.$route.params.keyword)
        this.keyword = this.$route.params.keyword
      
      this.getArticle();
    }
  }
}
</script>

<style scoped lang="scss">

</style>
