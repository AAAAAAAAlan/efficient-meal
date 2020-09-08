<template lang="pug">
  .product-card
    CafeCardLogo(:image="product.url")
    .product-info
      p
        strong {{ product.name }}
      p {{ product.price }}
      p
        i( @click="$router.push('/faq')" v-tooltip="`Коэффициент сытности: ${product.efficiency.toFixed(2)}`") {{ efficiency }} 
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    efficiency() {
      if (this.product.efficiency >= 6) {
        return 'Очень выгодно'
      } else if (this.product.efficiency >= 3) {
        return 'Довольно выгодно'
      } else if (this.product.efficiency < 3) {
        return 'Возможно вкусно, но не выгодно!'
      }
      return null
    },
  },
}
</script>

<style lang="stylus" scoped>
.product-card
  height: 95px
  width 300px
  background  #F5F5F7
  border-radius 14px
  display flex
  align-items center
  padding 6px
  .product-info
    p
      padding 10px 0 0 10px
      &:nth-child(3)
        font-size 14px
        cursor help
      &:nth-child(1)
        padding-top 0
</style>
