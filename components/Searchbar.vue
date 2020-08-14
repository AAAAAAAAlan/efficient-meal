<template lang="pug">
  .searchbar
    svg-icon(name="search" style="width: 21px; height: 21px")
    input(v-model="search" placeholder="Поиск по позициям")

</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search(newValue) {
      this.$store.commit('SET_SEARCH', newValue)
    },
  },
}
</script>

<style lang="stylus" scoped>
.searchbar
  margin-top 24px
  height 40px
  background #F5F5F7
  border-radius 8px
  display flex
  align-items center
  padding 0 15px

  input
    width 100%
    margin-left 10px
    background #F5F5F7
</style>
