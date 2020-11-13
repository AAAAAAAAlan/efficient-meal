<template lang="pug">
  .cafe-card
    CafeCardLogo.logo(:image="cafe.image")
    .cafe-info
      h3 {{ cafe.name.toUpperCase() }}
      p {{ `${cafe.efficientMeals} эффективных позиций` }}
    .cafe-rating
      svg-icon(name="rating" style="width: 16px; height: 16px")
      p {{ cafe.rating }}
    CafeCardBtn.btn(:name="cafe.name")
</template>

<script>
import CafeCardLogo from '@/components/CafeCard/CafeCardLogo.vue'
import CafeCardBtn from '@/components/CafeCard/CafeCardBtn.vue'

export default {
  components: {
    CafeCardLogo,
    CafeCardBtn,
  },
  props: {
    cafe: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.cafe-card
  display flex
  margin-top 16px
  height 80px
  background-color #F5F5F7
  border-radius 14px
  align-items center
  justify-content space-between
  padding 0 24px 0 8px
  .cafe-info
    width 100%
    max-width 200px
    p
      padding-top 10px
  .cafe-rating
    display flex
    padding-left 100px
    p
      padding-left 2px

@media (max-width: 600px)
  .cafe-card
    .logo
      display none
    .cafe-rating
      display none
</style>
