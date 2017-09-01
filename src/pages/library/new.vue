<template lang="jade">
  div.input
    input.full-width(v-model="book.name",placeholder="Name")
    br
    input.full-width(v-model="book.image",placeholder="Image")
    br
    input.full-width(v-model="book.price",placeholder="Price")
    br
    input.full-width(v-model="book.subject",placeholder="Subject")
    br
    input.full-width(v-model="book.type",placeholder="Type")
    br
    input.full-width(v-model="book.isbn",placeholder="ISBN")
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
        isbn: ''
      }
    }
  },
  created: function() {

  },
  methods: {
    async submit() {
      if (this.book.name && this.book.price && this.book.image && this.book.subject && this.book.isbn) {
        let result = await this.$db.newBook(this, this.book)
        if (parseInt(result.insertedCount) > 0) {
          alert('添加成功')
        }
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
.full-width{
    width:calc(100% - 20px);
}
</style>
