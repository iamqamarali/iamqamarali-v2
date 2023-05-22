<script setup>

let { skin } = useSkin();

</script>

<template>
    <div class="site-layout base-skin " :class="skin" >
        <PartialsHeader />
        <slot></slot>
        <PartialsFooter />
    </div>
</template>