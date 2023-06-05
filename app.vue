<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
})

</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="#ffdb3a"
      :height="3"
    />
    <Preloader></Preloader>

    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import '~/assets/scss/app.scss';

</style>