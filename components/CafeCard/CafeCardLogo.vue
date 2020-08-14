<template lang="pug">
  .logo(:style="{ backgroundImage: `url(${image})` }")
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.logo
  width 64px
  height 64px
  background-color #FFFFFF
  border-radius 12px
  background-size 64px
</style>
