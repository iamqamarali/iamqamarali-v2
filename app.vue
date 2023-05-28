<script setup>
useHead({
    htmlAttrs: { lang: 'en' },
})

</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator
      color="#3B8070"
      :throttle="0"
      :height="4"
    />
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style lang="scss">
@import '~/assets/scss/app.scss';

</style>