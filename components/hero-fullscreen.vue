
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

/**
 * 
 * animation
 */
const {
    animations,
    easings,
    stagger
} = useAnimations();
const content = ref(null);
const cat = ref(null);
const animateHero = () => {
    let elements = content.value.children;

    // create fade and slide from down to up stagger animation using web animation api
    Array.from(elements).forEach((element, index) => {
        element.style.opacity = 0;
        
        let animation = element.animate(animations.slideUp, {
            ...animations.slideUpConfig,
            delay: stagger(index),
        })
    })


    // animate cat slide down
    if(cat.value){
        cat.value.$el.style.opacity = 0;
        cat.value.$el.animate({
            opacity: [0, 1],
            transform: ['translateY(-400px)', 'translateY(0px)']
        }, {
            ...animations.slideUpConfig,
            delay: stagger(2),
        })
    }

}


onMounted(()=>{
    // set background if provided
    if(props.background){
        hero.value.style.background = props.background
    }

    // animate hero
    animateHero();
})





</script>


<template>
    <section class="hero-fullscreen" ref="hero">
        <RisingSquares></RisingSquares>
        <HangingCat ref="cat" ></HangingCat>

        <div class="container">            
            <div class="hero-fullscreen-wrapper">

                <header class="hero-fullscreen-content" ref="content">
                    <h1 class="hero-fullscreen-title" v-if="title">
                        {{ title }}
                    </h1>
                    <h3 class="hero-fullscreen-subtitle"  v-if="subtitle">
                        {{ subtitle }}
                    </h3>
                    <p class="hero-fullscreen-description " v-if="description">
                        {{ description }}
                    </p>

                    <NuxtLink :to="ctaLink" class="button button-lg button-black " v-if="ctaText" @click="$emit('cta-click')" >
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