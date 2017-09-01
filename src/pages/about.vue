<template lang="jade">
  div.center.aligned
    h3 Hack it first
    table.cipher-table
      tr
        td 1
        td 3
        td 9
      tr
        td 2
        td 7
        td 4
      tr
        td 5
        td 6
        td 8
    br
    div.input
      input(placeholder="your answer", style="text-align:center")
</template>

<script>
import Datetime from '@/common/datetime'
import Browser from '@/common/browser'

export default {
  name: 'about',
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.cipher-table{
  width:100%;
  border:1px solid #ccc;
  border-collapse: collapse;
  td{
    border:1px solid #ccc;
    padding: 10px;
    font-size:0.8em;
    &:hover{
      background-color:#223132;
      cursor: pointer;
    }
  }
}
</style>
