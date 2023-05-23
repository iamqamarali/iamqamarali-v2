<script setup>

let { skin } = useSkin();

</script>

<template>
    <div class="site-layout base-skin " :class="skin" >
        <PartialsHeader />
        <slot></slot>
        <PartialsContact />
        <PartialsFooter />
    </div>
</template>