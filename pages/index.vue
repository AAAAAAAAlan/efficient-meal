<template lang="pug">
  div
    .container
      h1 Кафе и рестораны.
      Sorting.sorting(:filters="['Все', 'Свежие', 'Высокооценённые', 'Популярные']")
      CafeCard.cafe-card(v-for="(cafe, index) in cafes" :key="cafe.index" :cafe="cafe")
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
      cafes: [
        {
          image: 'https://i.imgur.com/vM4ivzf.png',
          name: 'mcdonalds',
          efficientMeals: '21',
          rating: '4,5',
        },
        {
          image: 'https://upload.wikimedia.org/wikipedia/ru/b/bf/KFC_logo.svg',
          name: 'kfc',
          efficientMeals: '4',
          rating: '3.8',
        },
        {
          image:
            'https://lh3.googleusercontent.com/PQeS3_IK93bJpSUlF0Scj5NMylgJcPgwb7Mio7iEIPjpl1jD4jFoql9dM2xuM5IRQ0c',
          name: 'laolee',
          efficientMeals: '8',
          rating: '5',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Efficient Meal',
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
