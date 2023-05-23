<script setup>

let { skin } = useSkin();

</script> 
<template>
    <div class="site-layout base-skin " :class="skin">
        <AdminHeader />
        <slot></slot>
        <PartialsFooter />
    </div>
</template>
