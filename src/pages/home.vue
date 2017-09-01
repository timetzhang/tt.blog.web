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
    .center.aligned
      button.flat-button(@click="getMoreArticle", style="margin-bottom: 20px") {{loadingMoreText}}
</template>

<script>
import Datetime from '@/common/datetime'
import Browser from '@/common/browser'

export default {
  name: 'home',
  data() {
    return {
      articles: [],
      category: this.$route.params.category,
      keyword: this.$route.params.keyword,
      isMobile: Browser.mobile,
      currentPage: 0,
      pageSize: 10,

      //loading
      loadingMoreText: '点击载入更多'
    }
  },
  mounted: async function() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      // load db
      let data = [];
      if (!this.$route.params.category && !this.$route.params.keyword) {
        data = await this.$db.getArticle(this, {
          pagenum: this.currentPage,
          pagesize: this.pageSize
        });
      }
      if (this.$route.params.category) {
        data = await this.$db.getArticle(this, {
          category: this.category,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        })
      }
      if (this.$route.params.keyword) {
        data = await this.$db.getArticle(this, {
          keyword: this.keyword,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        })
      }

      if (data.length <= 0) {
        this.loadingMoreText = '没有更多了'
      }
      else {
        // format the date and push
        data.forEach(function(element) {
          element.time = Datetime.dateFormat(element.time)
          this.articles.push(element);
        }, this);
      }
    },
    getMoreArticle() {
      this.currentPage++;
      this.getArticle();
    },
    resetArticle() {
      this.articles = []
      this.currentPage = 0
      this.loadingMoreText = '点击载入更多'
    }
  },
  watch: {
    async '$route'() {
      this.category = this.$route.params.category
      this.keyword = this.$route.params.keyword
      this.resetArticle()
      this.getArticle()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
