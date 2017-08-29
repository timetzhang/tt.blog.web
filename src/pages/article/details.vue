<template lang="jade">
  div
    .article
      .name {{article.details.name}}
      .time {{article.details.time}}
      .details(v-html="article.details.details")
    br
    .comment
      div.header Comments ({{article.comments.length}})
      div(v-for="comment in article.comments",:key="comment.id")
        .name {{comment.username}}
        .time
          span
          span {{comment.time}}
        .details {{comment.details}}
    br
    .reply
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

export default {
  name: 'article-details',
  data() {
    return {
      article: {details:{}, comments:[]},
      newComment: {
        username: '',
        email:'',
        details: '',
        id: this.$route.params.id
      }, 
    }
  },
  created: function() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      this.article = await this.$db.getArticleDetails(this, { id: this.$route.params.id })
      this.article.details.time = Datetime.dateFormat(this.article.details.time)
      this.article.comments.forEach(function(element) {
        element.time = Datetime.getTimespan(element.time)
      }, this);
    },
    async submit(){
      if(this.newComment.username && this.newComment.email && this.newComment.details){
        
        let result = await this.$db.newComment(this, this.newComment);
        if(result.insertedCount > 0){
          this.getArticle();
          this.clearInput();
        }
      }
    },
    clearInput(){
      this.newComment = {};
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">

</style>
