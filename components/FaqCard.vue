<template lang="pug">
  .faq-card
    .text
      h1 Что такое коэффициент эффективности?
      p Я делю количество калорий в продукте на его цену и получаю коэффициент, по которому сравниваю каждый товар из меню. Чем выше коэффициент, тем выгоднее этот товар.
      nuxt-link.link(to="/")
        .btn Вернуться на главную.
    .img
      <img src="https://img.icons8.com/ios/100/000000/bread-and-rye.png"/>

</template>

<style lang="stylus" scoped>
.faq-card
  display flex
  justify-content space-around
  align-items center
  width 100%
  background #F5F5F7
  border-radius 14px
  padding 24px
  .text
    h1
      font-size 24px
      line-height 38px
      margin-bottom 15px
    p
      font-size 16px
      line-height 24px
      margin-bottom 25px
    .link
      text-decoration none
      .btn
        width fit-content
        height 40px
        background #000000
        border-radius 8px
        color white
        padding 10px
</style>
