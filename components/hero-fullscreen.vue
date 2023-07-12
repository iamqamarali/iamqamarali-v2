
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
const content = ref(null);
const cat = ref(null);
const wait = 200;
const animateHero = () => {
    let elements = content.value.children;

    // create fade and slide from down to up stagger animation using web animation api
    Array.from(elements).forEach((element, index) => {
        element.style.opacity = 0;
        
        let animation = element.animate([
            { opacity: 0, transform: 'translateY(100px)' },
            { opacity: 1, transform: 'translateY(0px)' }
        ], {
            duration: 2000,
            easing: 'cubic-bezier(.13,.01,.01,1)',
            fill: 'forwards',
            delay: wait + (120 * index),
        })
    })


    // animate cat
    cat.value.$el.style.opacity = 0;
    cat.value.$el.animate([
        { opacity: 0, transform: 'translateY(-200px) ' },
        { opacity: 1, transform: 'translateY(0px) translateX(0px)' }
    ], {
        duration: 1800,
        easing: 'cubic-bezier(.13,.01,.01,1)',
        fill: 'forwards',
        delay: wait + (160 * elements.length),
    })

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