<template lang="pug">
  .sorting
    h2(v-for="filter in filters") {{ filter }}
</template>

<script>
export default {
  data() {
    return {
      filters: ['Все', 'Свежие', 'Высокооценённые', 'Популярные'],
    }
  },
}
</script>

<style lang="stylus" scoped>
.sorting
  display flex
  justify-content space-between
  h2
    margin-top 16px
    color $black
    opacity 0.3
    cursor pointer
    &:first-child
      opacity 1
    &:hover
      opacity 1
</style>
