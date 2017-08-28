<template lang="jade">
  #app
      .appbar
        .container
          img.logo(src="/static/img/logo.png")
          button.flat-button.right(@click="toggleMenu", v-if="isMobile")
            i.icon.content.fitted.large
      .container
        div.trans.opacity(:class="isMobile ? 'mobile-100' : 'desktop-20'", v-if="isMenuDisplay")
          .menu(:style="'height:'+screenHeight+ 'px'")
            router-link.item(to="/", :class="$route.path == '/' ? 'active' : ''") 
              i.icon.tasks.large
              span.text Home
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
            router-link.item(to="/about") 
              i.icon.question.large
              span.text About
        div(:class="isMobile ? 'mobile-100' : isMenuDisplay ? 'desktop-80' : 'desktop-100'")
          router-view
</template>

<script>
import Browser from '@/common/browser'

export default {
  name: 'app',
  data() {
    return {
      isMenuDisplay: true,
      isMobile: Browser.mobile,
      category: 'home'
    }
  },
  mounted: function() {
    this.isMobile = Browser.mobile;
    if (this.isMobile) {
      this.isMenuDisplay = false;
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuDisplay = !this.isMenuDisplay;
    }
  },
  watch: {
    "$route"() {
      this.category = this.$route.params.category;
    }
  }
}
</script>

<style lang="scss">
$back-color: #f7f7f7;
$back-primary-color: #e7e7e7;
$back-secondary-color: #fcfcfc;
$primay-color: #333333;
$secondary-color: #999999;
$hover-color: #d7d7d7;
$border-color:#d7d7d7;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $back-color;
  margin-top: 46px;
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
      font-size:1.3em;
      text-align: center;
      padding-top: 40px
    }
  }
}

//MENU
.menu {
  width: 100%;
  background-color: $back-secondary-color;
  z-index: 100;
  transition: opacity 0.5s;
  .item {
    padding: 10px;
    transition: background-color 0.6s;
    display: block;
    font-size: 0.8em;
    &:hover {
      cursor: pointer;
      background-color: #ddd;
    }
    &.active {
      background-color: $hover-color;
    }
  }
}

// DIVIDER
.divider {
  border-bottom: 1px solid $border-color;
  margin: 0 10px;
}

// LAYOUT
//desktop
@media screen and (max-width:1002px) {
  .container {
    width: 100%;
    margin: 0;
  }
  .mobile-100 {
    width: calc(100% - 20px);
    margin: 10px;
  }
  .mobile-50 {
    width: calc(50% - 20px);
    margin: 10px;
  }
}

//mobile
@media screen and (min-width:1002px) {
  .container {
    width: 1002px;
    margin: auto;
  }
  .desktop-80 {
    float: left;
    width: calc(80% - 20px);
    margin: 10px;
  }
  .desktop-20 {
    float: left;
    width: calc(20% - 20px);
    margin: 10px;
  }
}

//##article-list
.article-list {
  width: calc(100% - 40px);
  padding: 20px 20px 17px 20px;
  background-color: $back-secondary-color;
  margin-bottom: 15px;
  display: inline-block;
  transition: background-color 0.5s;
  &:hover {
    background-color: $hover-color;
    cursor: pointer;
  }
  .image {
    width: 240px;
    float: left;
    img {
      width: 240px;
    }
  }
  .details {
    float: left;
    margin-left: 10px;
    width: calc(100% - 240px - 20px);
    .name {
      font-size: 0.9em;
      font-weight: bold;
    }
    .brief {
      padding-top: 1em;
      font-size: 0.8em;
      line-height: 1.6em;
      min-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .meta {
      text-align: right;
      font-size: 0.7em;
      line-height: 1.6em;
      color: $secondary-color;
      padding-top: 10px;
      div {
        display: inline;
        margin-left: 10px;
      }
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
</style>
