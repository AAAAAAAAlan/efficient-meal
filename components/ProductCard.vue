<template lang="pug">
  .product-card
    CafeCardLogo(:image="product.url")
    .product-info
      p
        strong {{ product.name }}
      p {{ product.price }}
      p
        i {{ `Коэффициент сытности: ${product.efficency.toFixed(2)}` }} 
        //- >= 6 => Очень сытно / >= 3 => Сытно / <= 3 => Возможно вкусно, но не выгодно!
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="stylus" scoped>
.product-card
  height: 95px
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
      &:nth-child(1)
        padding-top 0
</style>
