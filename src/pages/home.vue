<template lang="jade">
  div
    router-link.article-list(v-for="item in articles", :key="item.id", :to="'/article/id=' + item._id")
      .image
          img(:src="item.image")
      .details
          .name {{item.name}}
          .brief {{item.brief}}
          .meta
              div.time
                  i.icon.calendar
                  span {{item.time}}
              div.view_count
                  i.icon.hand.pointer
                  span {{item.view_count}}
              div.comment_count {{item.comment_count}}
</template>

<script>
import Datetime from '@/common/datetime'

export default {
  name: 'hello',
  data() {
    return {
      articles: [],
      category: this.$route.params.category
    }
  },
  mounted: async function() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      // load db
      this.articles = await this.$db.getArticle(this, { category: this.category });
      // format the date
      this.articles.forEach(function(element) {
        element.time = Datetime.dateFormat(element.time)
      }, this);
    }
  },
  watch: {
    async '$route'() {
      this.category = this.$route.params.category;
      this.getArticle();
    }
  }
}
</script>

<style scoped lang="scss">

</style>
