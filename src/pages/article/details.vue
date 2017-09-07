<template lang="jade">
  div
    loading(v-if="isLoading")
    .article(v-if="!isLoading")
      .name {{article.details.name}}
      .time {{article.details.time}}
      .details(v-html="article.details.details")
      .route
        a.prev(:href='"/article/id="+article.prev._id', v-if="article.prev") 
          span.label <<上一篇 
          span {{article.prev.name}}
        a.next(:href='"/article/id="+article.next._id', v-if="article.next") 
          span {{article.next.name}}
          span.label  下一篇>>
      .clear
    br
    .comment(v-if="!isLoading")
      div.header Comments ({{article.comments.length}})
      div(v-for="comment in article.comments",:key="comment.id")
        .name {{comment.username}}
        .time
          span
          span {{comment.time}}
        .details {{comment.details}}
    br
    .reply(v-if="!isLoading")
      .header Please wrote your comment
      .input
        input(type="text",placeholder="Name", style="width:97%", v-model="newComment.username")
        br
        input(type="text",placeholder="Email", style="width:97%", v-model="newComment.email")
        br
        textarea(placeholder="Details", style="margin-top:15px; width:97%",rows="4", v-model="newComment.details")
        br
        div.center.aligned
          button.raised-button(style="width:200px",@click="submit") Submit
</template>

<script>
import Datetime from '@/common/datetime'
import Loading from '@/components/loading'

export default {
  name: 'article-details',
  components: {
    "loading": Loading
  },
  data() {
    return {
      article: { details: {}, comments: [] },
      newComment: {
        username: '',
        email: '',
        details: '',
        id: this.$route.params.id
      },
      isLoading: true
    }
  },
  created: function() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      this.isLoading = true;
      this.article = await this.$db.getArticleDetails(this, { id: this.$route.params.id })
      this.article.details.time = Datetime.dateFormat(this.article.details.time)
      this.article.comments.forEach(function(element) {
        element.time = Datetime.getTimespan(element.time)
      }, this);
      this.isLoading = false;
    },
    async submit() {
      if (this.newComment.username && this.newComment.email && this.newComment.details) {

        let result = await this.$db.newComment(this, this.newComment);
        if (result.insertedCount > 0) {
          this.getArticle();
          this.clearInput();
        }
      }
    },
    clearInput() {
      this.newComment = {};
    }
  },
  watch: {
    async '$route'() {
      this.getArticle();
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../common/config.scss";

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
  .route {
    border-top: 1px solid $border-color;
    padding-top: 15px;
    font-size: 0.8em;
    .prev {
      float: left;
      line-height: 2em;
    }
    .next {
      float: right;
      line-height: 2em;
    }
    .label {
      color: $secondary-color;
    }
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
