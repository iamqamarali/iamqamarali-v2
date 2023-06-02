
<script setup>

const props = defineProps({
    background: String,
    textColor: String,

    title: String,
    description: String,
    arrowDownTitle: String,

    ctaText: String,
    ctaLink: String,
})
const emit = defineEmits(['cta-click'])


const hero = useState(() => null)

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
        hero.value.style.color = props.textColor
    }
})



</script>


<template>
    <section class="hero-simple" ref="hero">
        <RisingSquares  ></RisingSquares>

        <div class="container-small">            
            <div class="hero-simple-wrapper">

                <header class="hero-simple-content">
                    <h1 class="hero-simple-title animate before-slide-bar"  v-if="title">
                        {{ title }}
                    </h1>
                    <p class="hero-simple-description animate before-slide-bar" v-if="description">
                        {{ description }}
                    </p>

                    <NuxtLink :to="ctaLink" class="button button-lg button-black animate before-slide-bar" v-if="ctaText" @click="$emit('cta-click')" >
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