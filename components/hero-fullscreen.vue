
<script setup>

const props = defineProps({
    background: String,
    title: String,
    subtitle: String,
    description: String,
    arrowDownTitle: String,

    ctaText: String,
    ctaLink: String,

    shouldAnimate : {
        type: Boolean,
        default: true
    }
})
const emit = defineEmits(['cta-click'])


const hero = ref(null)


const animateHeaderText = () => {
    let elements = hero.value.querySelectorAll('.animate')
    Array.from(elements).forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-slide-bar')
        }, index * 200)
    })    
}


onMounted(()=>{
    
    const initialPageLoad = useState('initial-page-load')
    setTimeout(() => {        
        animateHeaderText();
    }, initialPageLoad.value ? 1100 : 0);

})

// set background if provided
onMounted(()=>{
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
                    <h1 class="hero-fullscreen-title"  :class="shouldAnimate ? 'animate before-slide-bar' : '' " v-if="title">
                        {{ title }}
                    </h1>
                    <h3 class="hero-fullscreen-subtitle" :class="shouldAnimate ? 'animate before-slide-bar' : '' " v-if="subtitle">
                        {{ subtitle }}
                    </h3>
                    <p class="hero-fullscreen-description " :class="shouldAnimate ? 'animate before-slide-bar' : '' " v-if="description">
                        {{ description }}
                    </p>

                    <NuxtLink :to="ctaLink" class="button button-lg button-black " :class="shouldAnimate ? 'animate before-slide-bar' : '' " v-if="ctaText" @click="$emit('cta-click')" >
                        {{ ctaText }}
                    </NuxtLink>

                    <slot name="default"></slot>                    
                </header>

            </div>
        </div>  


        <ScrollDownArrow v-if="arrowDownTitle" :title="arrowDownTitle"></ScrollDownArrow>

    </section>
</template>

<style lang="scss" >



</style>