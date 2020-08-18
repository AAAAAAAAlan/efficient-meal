<template lang="pug">
  button(@click="$router.push('/' + name)") Меню
  </template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
button
  width 120px
  height 40px
  background #000000
  border-radius 8px
  transition 0.3s
  &:active
    border-radius 1px
</style>
