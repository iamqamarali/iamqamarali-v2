<script setup>
const props = defineProps([ 'image' ])

const imageBase64 = ref(null)

watchEffect(() => {
    let image = props.image
    if (image) {
        const reader = new FileReader()
        reader.onload = (e) => {
            imageBase64.value = e.target.result
        }
        reader.readAsDataURL(image)
    }
})


</script>

<template>
    <img :src="imageBase64"  v-if="imageBase64" alt="">
</template>

