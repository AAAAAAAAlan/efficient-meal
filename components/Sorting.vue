<template lang="pug">
  .sorting
    h2(v-for="filter in filters") {{ filter }}
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true,
    },
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
    &:hover
      opacity 1

@media (max-width: 600px)
  .sorting
    display none
</style>
