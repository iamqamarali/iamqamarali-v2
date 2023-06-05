<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
})

</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="#000"
      :height="3"
    />
    <Preloader></Preloader>

    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import '~/assets/scss/app.scss';

</style>