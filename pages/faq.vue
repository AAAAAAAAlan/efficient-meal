<template lang="pug">
  .container
    FaqCard
</template>

<script>
import FaqCard from '@/components/FaqCard'

export default {
  components: {
    FaqCard,
  },
}
</script>

<style lang="stylus" scoped>
.container
  margin-top 50px

@media (max-width: 600px)
  .container
    padding 10px
</style>
