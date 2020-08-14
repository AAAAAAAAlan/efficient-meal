<template lang="pug">
  .product-filter
    h2 Самый: 
    p(v-for="filter in filters" @click="selectFilter(filter)" :class="{ active: filter.active }") {{ filter.name }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      selectedFilter: (state) => state.selectFilter,
      filters: (state) => state.filters,
    }),
  },
  methods: {
    selectFilter(filter) {
      this.$store.commit('SET_FILTER', filter)
    },
  },
}
</script>

<style lang="stylus" scoped>
.product-filter
  margin-top 4px
  display flex
  justify-content space-between
  p
    margin-top 16px
    color $black
    opacity 0.3
    cursor pointer
    &:first-child
      opacity 1
    &:hover
      opacity 1
  h2
    margin-top 16px

.active
  text-decoration underline
  opacity 1 !important
</style>
