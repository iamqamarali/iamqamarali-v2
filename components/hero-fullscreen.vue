
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
const animateHero = () => {
    const { createFadeSlideUp, stagger, createFadeSlideDown, pageChangeDelay } = useAnimations();

    let elements = content.value.children;

    // create fade and slide from down to up stagger animation using web animation api
    Array.from(elements).forEach((element, index) => {
        element.style.opacity = 0;
        let animation = createFadeSlideUp(element, {
            staggerIndex : index,
            addPageChangeDelay : true
        })
    })


    // animate cat slide down
    if(cat.value){
        cat.value.$el.style.opacity = 0;
        createFadeSlideDown(cat.value.$el, {
            staggerIndex : 2,
            addPageChangeDelay : true
        },{
            transform: ['translateY(-400px)', 'translateY(0px)']
        })
    }

}


onMounted(()=>{
    // set background if provided
    if(props.background){
        hero.value.style.background = props.background
    }

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
                    <h1 class="hero-fullscreen-title" v-if="title" v-html="title">
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


    </section>
</template>

<style lang="scss" >



</style>