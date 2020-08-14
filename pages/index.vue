<template lang="pug">
  .container
    h1 Кафе и рестораны.
    Sorting.sorting(:filters="['Все', 'Свежие', 'Высокооценённые', 'Популярные']")
    CafeCard.cafe-card(:cafe="cafe")
    
</template>

<script>
import Sorting from '~/components/Sorting.vue'
import CafeCard from '~/components/CafeCard/CafeCard.vue'

export default {
  components: {
    Sorting,
    CafeCard,
  },
  data() {
    return {
      cafe: {
        image: 'https://i.imgur.com/vM4ivzf.png',
        name: 'Mcdonalds',
        efficentMeals: '11',
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
</style>
