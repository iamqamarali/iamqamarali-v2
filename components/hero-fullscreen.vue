
<script setup>

const props = defineProps({
    background: String,
    title: String,
    subtitle: String,
    description: String,

    ctaText: String,
})
const emit = defineEmits(['cta-click'])


const hero = ref(null)
onBeforeMount(()=>{
    if(props.background){
        hero.value.style.background = props.background
    }
})


</script>


<template>
    <section class="hero-fullscreen" ref="hero">
        <RisingSquares></RisingSquares>
        <HangingCat></HangingCat>

        <div class="container-small">            
            <div class="hero-fullscreen-wrapper">

                <header class="hero-fullscreen-content">
                    <h1 class="hero-fullscreen-title " v-if="title">
                        {{ title }}
                    </h1>
                    <h3 class="hero-fullscreen-subtitle" v-if="subtitle">
                        {{ subtitle }}
                    </h3>
                    <p class="hero-fullscreen-description" v-if="description">
                        {{ description }}
                    </p>

                    <button class="button button-lg button-black" @click="$emit('cta-click')" v-if="ctaText">
                        {{ ctaText }}
                    </button>

                    <slot name="default"></slot>
                    
                </header>

            </div>
        </div>  

    </section>
</template>

<style lang="scss" >



</style>