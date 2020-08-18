<template lang="pug">
  div
    .container
      h1 Кафе и рестораны.
      Sorting.sorting(:filters="['Все', 'Свежие', 'Высокооценённые', 'Популярные']")
      CafeCard.cafe-card(:cafe="cafe")
    Footer.footer
</template>

<script>
import Footer from '@/components/Footer.vue'
import Sorting from '~/components/Sorting.vue'
import CafeCard from '~/components/CafeCard/CafeCard.vue'

export default {
  components: {
    Footer,
    Sorting,
    CafeCard,
  },
  data() {
    return {
      cafe: {
        image: 'https://i.imgur.com/vM4ivzf.png',
        name: 'Mcdonalds',
        efficentMeals: '21',
        rating: '4,5',
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.container
  margin-top 40px
  h1
    font-size 24px

@media (max-width: 600px)
  .container
    margin-top 10px
    padding 5px
</style>
