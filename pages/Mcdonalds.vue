<template lang="pug">
  div
    .container
      .header
        a(@click="$router.push('/')")
          svg-icon(name="arrow" style="width: 21px; height: 21px; cursor: pointer")
        h1 {{ $route.name }}
      Searchbar
      ProductFilter
      .products
        ProductCard( v-for="(product, index) in searchedProducts" :key="index" :product="product" )
    FooterSlim
</template>

<script>
import { mapState } from 'vuex'

import Searchbar from '@/components/Searchbar.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductFilter from '@/components/ProductFilter.vue'
import FooterSlim from '@/components/FooterSlim.vue'

export default {
  components: {
    Searchbar,
    ProductCard,
    ProductFilter,
    FooterSlim,
  },
  async asyncData({ app, params }) {
    const products = await app.$axios.get(
      'https://fast-citadel-65021.herokuapp.com/'
    )
    return { products: products.data }
  },
  computed: {
    ...mapState({
      selectedFilter: (state) => state.selectedFilter,
      search: (state) => state.search,
    }),
    filteredProducts() {
      const arr = [...this.products]
      if (this.selectedFilter.name === 'эффективный') {
        return arr.sort((a, b) => b.efficiency - a.efficiency)
      } else if (this.selectedFilter.name === 'дорогой') {
        return arr.sort(
          (a, b) =>
            b.price.replace(/[^0-9.]/g, '') - a.price.replace(/[^0-9.]/g, '')
        )
      } else if (this.selectedFilter.name === 'дешевый') {
        return arr.sort(
          (a, b) =>
            a.price.replace(/[^0-9.]/g, '') - b.price.replace(/[^0-9.]/g, '')
        )
      }
      return this.products
    },
    searchedProducts() {
      return this.filteredProducts.filter((product) => {
        return product.name.toLowerCase().match(this.search.toLowerCase())
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.container
  .header
    margin-top 40px
    display flex
    align-items center
    a
      &:active
        transition transform 0.3s
        transform translate(-10px, 0)
    h1
      font-size 24px
      padding-left 10px
  .products
    margin-top 24px
    display grid
    grid-template-columns repeat(2, auto)
    gap 24px
    &:last-child
      margin-bottom 100px

@media (max-width: 600px)
  .container
    padding 5px
    .header
      margin-top 10px
    .products
      grid-template-columns repeat(1, auto)
      justify-items center
      align-items center
</style>
