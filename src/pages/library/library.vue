<template lang="jade">
  div
    div.paper
      .center.aligned.input
        input(placeholder="Books Keyword", style="width:calc(100% - 20px)", v-model='search')
    .list.book(v-for="item in books", :key="item.id")
      .image(v-if="!isMobile")
          img(:src="item.image == null ? '/static/img/noimage_book.png' : item.image")
      .details
        a.name(:href="'https://book.douban.com/subject_search?search_text=' + item.name", target="_blank") {{item.name}}
        .meta
          div.time
              i.icon.calendar
              span 入库时间 {{item.time}}
          span &nbsp;
          div.time
              i.icon.archive
              span {{item.status}}
          span &nbsp;
          div.time
              i.icon.yen
              span {{item.price}}
        .brief SUBJECT: {{item.subject}} / TYPE: {{item.type}} / ISBN: {{item.isbn}}
        .brief PUBLISHER: {{item.publisher}} / AUTHOR: {{item.author}} / YEAR: {{item.year}}
    .center.aligned
      button.flat-button(@click="getMoreBook", style="margin-bottom: 20px") {{loadingMoreText}}
</template>

<script>
import Datetime from '@/common/datetime'
import Browser from '@/common/browser'

export default {
  name: 'library',
  data() {
    return {
      books: [],
      search: '',
      currentPage: 0,
      pageSize: 10,
      loadingMoreText: '点击载入更多',
      isMobile: Browser.mobile
    }
  },
  mounted: async function() {
    let data = await this.$db.searchBook(this, {
      search: ".",
      pagenum: this.currentPage,
      pagesize: this.pageSize
    })
    // format the date and push
    data.forEach(function(element) {
      element.time = Datetime.dateFormat(element.time)
      this.books.push(element);
    }, this);
  },
  methods: {
    async searchBook() {
      let data = []
      if (this.search.trim()) {
        data = await this.$db.searchBook(this, {
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
          this.books.push(element);
        }, this);
      }
    },
    getMoreBook() {
      this.currentPage++;
      this.searchBook();
    },
    resetBook() {
      this.books = []
      this.currentPage = 0
      this.loadingMoreText = '点击载入更多'
    }
  },
  watch: {
    search() {
      if (this.search) {
        this.resetBook()
        this.searchBook()
      }
      else {
        this.resetBook()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.book {
  .image {
    width: 10%;
  }
  .details {
    width: calc(100% - 10% - 30px);
    .brief {
      -webkit-line-clamp: 1;
    }
  }
}
</style>
