<template lang="pug">
  .container
    h1 {{ $route.name }}
    Searchbar
    ProductFilter
    .products
      ProductCard( v-for="(product, index) in searchedProducts" :key="index" :product="product" )
</template>

<script>
import { mapState } from 'vuex'

import Searchbar from '@/components/Searchbar.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductFilter from '@/components/ProductFilter.vue'

export default {
  components: {
    Searchbar,
    ProductCard,
    ProductFilter,
  },
  async asyncData({ app, params }) {
    const products = await app.$axios.get('http://localhost:4000/')
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
        return arr.sort((a, b) => b.efficency - a.efficency) // ПОМЕНЯТЬ СЛОВО НА БЭКЕ И НА ФРОНТЕ
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
  h1
    margin-top 40px
    font-size 24px
  .products
    margin-top 24px
    display grid
    grid-template-columns repeat(2, auto)
    gap 24px
</style>
