<template lang="jade">
  div
    div.paper
      .center.aligned.input
        input(placeholder="Keyword", style="width:calc(100% - 20px)", v-model='search')
    .list.word.origin(v-for="item in words", :key="item.id")
      .details
        div.name {{item.name}}
        .meta
          div.time
              i.icon.calendar
              span 收录时间 {{item.time}}
        .content(v-html="item.details")
    .center.aligned
      button.flat-button(@click="getMore", style="margin-bottom: 20px") {{loadingMoreText}}
</template>

<script>
import Datetime from '@/common/datetime'
import Browser from '@/common/browser'

export default {
  name: 'word_origin',
  data() {
    return {
      words: [],
      search: '.',
      currentPage: 0,
      pageSize: 10,
      loadingMoreText: '点击载入更多',
      isMobile: Browser.mobile
    }
  },
  mounted: function() {
    this.init();
  },
  methods: {
    async init() {
      let data = await this.$db.searchWordOrigin(this, {
        search: ".",
        pagenum: this.currentPage,
        pagesize: this.pageSize
      })
      // format the date and push
      data.forEach(function(element) {
        element.time = Datetime.dateFormat(element.time)
        this.words.push(element);
      }, this);
    },
    async searchWordOrigin() {
      let data = []
      if (this.search.trim()) {
        data = await this.$db.searchWordOrigin(this, {
          search: this.search,
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
          this.words.push(element);
        }, this);
      }
    },
    getMore() {
      this.currentPage++;
      this.searchWordOrigin();
    },
    reset() {
      this.words = []
      this.currentPage = 0
      this.loadingMoreText = '点击载入更多'
    }
  },
  watch: {
    search() {
      if (this.search) {
        this.reset()
        this.searchWordOrigin()
      }
      else {
        this.reset()
        this.init()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.word.origin {
  .name {
    font-size: 1.6em;
    text-transform: capitalize;
  }
  .details {
    width: calc(100% - 30px);
    .content {}
  }
}
</style>
