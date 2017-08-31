<template lang="jade">
  #app
      .appbar
        .container
          router-link(to="/")
            img.logo(:src="isMobile ? '/static/img/logo@2x.png' : '/static/img/logo.png'", :width="isMobile ? '200px' : '295px'")
          button.flat-button.right(@click="toggleMenu", v-if="isMobile")
            i.icon.content.fitted.large
      .container
        div.trans.opacity(:class="isMobile ? 'mobile-100' : 'desktop-left'", v-if="isMenuDisplay")
          .menu(:style="'height:'+screenHeight+ 'px'")
            router-link.item(to="/", :class="$route.path == '/' ? 'active' : ''") 
              i.icon.tasks.large
              span.text Home
            .divider
            router-link.item(to="/article/category=think", :class="category == 'think' ? 'active' : ''") 
              i.icon.cloud.large
              span.text Think
            router-link.item(to="/article/category=science", :class="category == 'science' ? 'active' : ''") 
              i.icon.lab.large
              span.text Science
            router-link.item(to="/article/category=music", :class="category == 'music' ? 'active' : ''")  
              i.icon.music.large
              span.text Music
            router-link.item(to="/article/category=code", :class="category == 'code' ? 'active' : ''")  
              i.icon.laptop.large
              span.text Code
            router-link.item(to="/article/category=design", :class="category == 'design' ? 'active' : ''") 
              i.icon.magnet.large
              span.text Design
            router-link.item(to="/article/category=misc", :class="category == 'misc' ? 'active' : ''") 
              i.icon.coffee.large
              span.text Misc
            .divider
            router-link.item(to="/guestbook") 
              i.icon.book.large
              span.text Guestbook
            .divider
            router-link.item(to="/about") 
              i.icon.question.large
              span.text About
        div(:class="isMobile ? 'mobile-100' : isMenuDisplay ? 'desktop-center' : ''")
          router-view
        div.desktop-right(:class="isMobile ? 'mobile-100' : 'desktop-right'")
          .recommend
            .title 
              i.icon.bullseye
              span 热门推荐
            router-link.item(v-for="item,index in top10Articles",:key="index", :to="'/article/id='+item._id",) 
              span.index {{index+1}}
              span.name {{item.name}}
          .spacer
          .keywords
            .title 
              i.icon.tags
              span 热门标签
            router-link.item(v-for="item,index in hotKeywords", :key="index",:to="'/article/keyword='+item.keyword", :class="currentKeyword == item.keyword ? 'active' : ''") 
              i.icon(:class="item.icon")
              span {{item.keyword}}
</template>

<script>
import Browser from '@/common/browser'

export default {
  name: 'app',
  data() {
    return {
      isMenuDisplay: true,
      isMobile: Browser.mobile,
      category: 'home',
      top10Articles: [],
      hotKeywords: [],
      currentKeyword: ''
    }
  },
  mounted: function() {
    this.isMobile = Browser.mobile
    if (this.isMobile) {
      this.isMenuDisplay = false
    }
    this.getTop10Article();
    this.getHotKeywords();
  },
  methods: {
    toggleMenu() {
      this.isMenuDisplay = !this.isMenuDisplay;
    },
    async getTop10Article() {
      this.top10Articles = await this.$db.getTop10Article(this)
    },
    async getHotKeywords() {
      this.hotKeywords = await this.$db.getHotKeywords(this)
    }
  },
  watch: {
    "$route"() {
      if (this.$route.params.category)
        this.category = this.$route.params.category;
      if (this.$route.params.keyword)
        this.currentKeyword = this.$route.params.keyword;

      if (this.isMobile) { //如果是移动端，关闭菜单
        this.isMenuDisplay = false;
      }
    }
  }
}
</script>

<style lang="scss">
$back-color: #f0f0f0;
$back-primary-color: #e7e7e7;
$back-secondary-color: #fcfcfc;
$primay-color: #444444;
$secondary-color: #999999;
$hover-color: #e0e0e0;
$border-color:#d7d7d7;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $back-color;
  margin-top: 50px;
  color: $primay-color;
  a,
  a:link,
  a:active,
  a:visited {
    color: $primay-color;
  }
}

.center.aligned {
  text-align: center;
}

.left.aligned {
  text-align: left;
}

.right.aligned {
  text-align: right;
}

//##appbar
.appbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: $back-primary-color;
  z-index: 100;
  .logo {
    float: left;
    padding: 10px;
  }
  .right {
    float: right;
    padding: 10px;
  }
}

//##button
.flat-button {
  -webkit-appearance: none;
  border: none;
  padding: 10px;
  background-color: transparent;
  transition: background-color 0.6s;
  &:hover {
    cursor: pointer;
    background-color: #ddd;
  }
  &.active {
    background-color: $back-primary-color;
    color: white;
  }
}

.raised-button {
  border: none;
  padding: 10px;
  background-color: $back-primary-color;
  transition: background-color 0.5s;
  cursor: pointer;
  &:hover {
    background-color: $hover-color;
  }
  &.active {
    background-color: #DF0101;
    color: white;
  }
}


//##input
.input {
  -webkit-appereance: none;
  input,
  select {
    border: none;
    border-bottom: 1px solid $border-color;
    font-size: 1em;
    line-height: 2em;
    padding: 10px;
    background-color: transparent;
    transition: background-color 0.5s;
    &:hover {
      cursor: pointer;
      background-color: $hover-color;
    }
  }
  textarea {
    border: 1px solid $border-color;
    line-height: 2em;
    padding: 10px;
    background-color: transparent;
    transition: background-color 0.5s;
    &:hover {
      cursor: pointer;
      background-color: $hover-color;
    }
    &::-webkit-input-placeholder {
      font-family: Helvetica, sans-serif;
      font-size: 1.3em;
      text-align: center;
      padding-top: 40px
    }
  }
}

//##menu
.menu {
  width: 100%;
  z-index: 100;
  transition: opacity 0.5s;
  background-color: $back-secondary-color;
  .item {
    padding: 10px;
    transition: background-color 0.6s;
    display: block;
    font-size: 0.8em;
    &:hover {
      cursor: pointer;
      background-color: $hover-color;
    }
    &.active {
      background-color: $hover-color;
    }
  }
}

//##divider
.divider {
  border-bottom: 1px dashed $border-color;
  margin: 0 12px;
}

.spacer {
  height: 10px;
}

//##layout
//mobile
@media screen and (max-width:1002px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .mobile-100 {
    width: calc(100% - 20px);
    margin: 10px;
  }
  .article-list {
    .image {
      width: calc(100% - 30px) !important;
      padding-bottom: 10px;
    }
    .details {
      width: calc(100% - 20px) !important;
      .brief {
        -webkit-line-clamp: 3 !important;
      }
    }
  }
}

//desktop
@media screen and (min-width:1002px) {
  .container {
    width: 1100px;
    margin: auto;
  }
  .desktop-center {
    float: left;
    width: calc(60% - 10px);
    margin: 5px;
  }
  .desktop-right {
    float: left;
    width: calc(27% - 10px);
    margin: 5px;
  }
  .desktop-left {
    float: left;
    width: calc(13% - 10px);
    margin: 5px;
  }
}

//##article-list
.article-list {
  width: 100%;
  margin-bottom: 5px;
  padding: 15px 0;
  display: inline-block;
  background-color: $back-secondary-color;
  transition: background-color 0.5s;
  &:hover {
    background-color: $hover-color;
    cursor: pointer;
  }
  .image {
    position: relative;
    width: 25%;
    float: left;
    padding-left: 15px;
    img {
      width: 100%;
    }
  }
  .details {
    float: left;
    margin-left: 10px;
    width: calc(100% - 25% - 30px);
    .name {
      width: calc(100% - 10px);
      font-size: 0.8em;
      font-weight: bold;
    }
    .meta {
      font-size: 0.7em;
      line-height: 2.5em;
      color: $secondary-color;
      div {
        display: inline;
      }
    }
    .brief {
      font-size: 0.8em;
      line-height: 1.7em;
      min-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  &:after {
    content: " ";
    clear: both;
  }
}

//##article
.article {
  background-color: $back-secondary-color;
  padding: 30px;
  .name {
    line-height: 2.4em;
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
  }
  .time {
    color: $secondary-color;
    font-size: 0.7em;
    text-align: center;
    padding: 15px 0;
  }
  .details {
    line-height: 1.5em;
    font-size: 0.9em;
  }
}

.comment {
  background-color: $back-secondary-color;
  padding: 30px;
  .name:not(first-child) {
    padding-top: 10px;
  }
  .name {
    font-size: 0.8em;
    display: inline-block;
  }
  .time {
    color: $secondary-color;
    font-size: 0.7em;
    padding-left: 10px;
    display: inline-block;
  }
  .details {
    font-size: 0.9em;
    padding: 10px 0;
    border-bottom: 1px solid $border-color;
  }
  .details:last-child {
    border-bottom: none;
  }
  .header {
    font-size: 0.9em;
    font-weight: bold;
    padding-bottom: 10px;
  }
}

.reply {
  background-color: $back-secondary-color;
  padding: 30px;
  .header {
    font-size: 0.9em;
    font-weight: bold;
    padding-bottom: 10px;
  }
}

//##recommend
.recommend {
  background-color: $back-secondary-color;
  .title {
    font-weight: bold;
    font-size: 0.9em;
    padding: 10px;
    color: #777;
  }
  .item {
    padding: 10px;
    transition: background-color 0.5s;
    display:block;
    &:hover {
      background-color: $hover-color;
      cursor: pointer;
    }
    .index {
      padding: 3px 7px;
      margin-right: 10px;
      font-size: 0.7em;
      background-color: $back-primary-color;
    }
    .name {
      font-size: 0.8em;
    }
  }
}

.keywords {
  background-color: $back-secondary-color;
  margin:0 auto;
  .title {
    font-weight: bold;
    font-size: 0.9em;
    padding: 10px;
    color: #777;
  }
  .item {
    display: inline-block;
    padding: 10px;
    background-color: #f0f0f0;
    transition: background-color 0.5s;
    font-size:0.8em;
    margin-left:5px;
    margin-top:5px;
    &:last-child{
      margin-bottom:5px;
    }
    &:hover {
      background-color: $hover-color;
      cursor: pointer;
    }
    &.active {
      background-color: $back-primary-color;
    }
  }
}
</style>
