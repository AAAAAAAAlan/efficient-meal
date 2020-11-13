<template lang="pug">
.container
  .error
    .text
      h1 ОШИБКА 404
      p Скорее всего это произошло потому что я использую бесплатный хостинг, который очень долго просыпается. Перезагрузите страницу или нажмите на кнопку ниже чтобы всё заработало как надо!
      nuxt-link.link(to="/")
        .btn Вернуться на главную.
</template>

<script>
export default {
  head() {
    return {
      title: 'ERROR',
    }
  },
}
</script>

<style lang="stylus" scoped>
.container
  margin-top 50px
  .error
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

@media (max-width: 600px)
  .container
    padding 10px
</style>
