<template lang="pug">
  .footer
    .container
      p Возьмите меня на работу!
      .links-container
        a(href="tg://resolve?domain=snowman130")
          svg-icon(name="telegram" style="width: 32px; height: 32px; filter:invert(1);")
        a(href="https://github.com/AlanSnowle")
          svg-icon(name="github" style="width: 32px; height: 32px; filter:invert(1);")
        a(href="https://hh.ru/resume/5242270eff082965830039ed1f4a4a4d375a6c")
          img(src="https://tech.hh.ru/api/logos/min-hh-white.png" style="width: 32px; height: 32px;")
        

</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.footer
  margin-top 24px
  width 100%
  padding 8px
  background-color black
  position absolute
  bottom: 0
  .container
    p
      color white
      text-align center
      margin-bottom 14px
    .links-container
      display flex
      justify-content space-around
      align-items center
      margin 16px 0 8px 0
</style>
