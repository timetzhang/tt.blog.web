<template lang="jade">
  div.input
    input.full-width(v-model="book.isbn",placeholder="ISBN")
    br
    br
    button.raised-button(@click="searchOnlineBook", style="width:100px") 搜 索
    br
    div 
      p 书名：
      p 
        input.full-width(v-model="book.name",placeholder="Name")
      p 作者：
      p 
        input.full-width(v-model="book.author",placeholder="Author")
      p 出版社：
      p 
        input.full-width(v-model="book.publisher",placeholder="Publisher")
      p 价格：
      p 
        input.full-width(v-model="book.price",placeholder="Price")
      p 出版年：
      p 
        input.full-width(v-model="book.year",placeholder="Year")
      div
        p 封面：
        img(:src='book.image')
        p 
          input.full-width(v-model="book.image",placeholder="图片地址")
    br
    p 请输入学科分类和类型：
    input.full-width(v-model="book.subject",placeholder="Subject")
    br
    input.full-width(v-model="book.type",placeholder="Type")
    br
    br
    .center.aligned
      button.raised-button(@click="submit", style="width:200px") Submit
</template>

<script>
import Datetime from '@/common/datetime'

export default {
  name: 'book-new',
  data() {
    return {
      book: {
        name: '',
        price: '',
        image: '',
        subject: '',
        type: '',
        isbn: '',
        year: ''
      }
    }
  },
  created: function() {

  },
  methods: {
    async submit() {
      if (this.book.name && this.book.price && this.book.image && this.book.subject && this.book.isbn) {
        let result = await this.$db.newBook(this, this.book)
        if(result.insertedCount > 0){
          alert('提交成功');
          this.$router.push('/library')
        }else{
          alert('提交失败,可能已有书籍');
        }
      }
    },
    async searchOnlineBook() {
      let result = await this.$db.searchOnlineBook(this, { search: this.book.isbn })
      this.book = {
        isbn: this.book.isbn,
        name: result.name,
        price: result.price,
        image: result.image,
        author: result.author,
        publisher: result.publisher,
        year: result.year
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
.full-width {
  width: calc(100% - 20px);
}
</style>
