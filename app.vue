<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
  script: [
    {src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"}
  ]

})

</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="black"
      :throttle="0"
      :height="4"
    />
    <Preloader></Preloader>

    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import '~/assets/scss/app.scss';

</style>