
<script setup>

const props = defineProps({
    background: String,
    textColor: String,

    title: String,
    description: String,
    arrowDownTitle: String,

    ctaText: String,
    ctaLink: String,


    styles: {
        type: Object,
        default: () => ({})
    },
    overlay: {
        type: Boolean,
        default: false
    }

})
const emit = defineEmits(['cta-click'])


const hero = useState(() => null)

/**
 * 
 * animation
 */
 const {
    animations,
    stagger
} = useAnimations();
const content = ref( null);
const wait = 200;
const animateHeaderText = () => {
    let elements = content.value.children;

    // create fade and slide from down to up stagger animation using web animation api
    Array.from(elements).forEach((element, index) => {
        element.style.opacity = 0;
        
        let animation = element.animate(animations.slideUp, {
            ...animations.slideUpConfig,
            delay: stagger(index),
        })
    })
    
}


onMounted(()=>{
        animateHeaderText();

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
    <section class="hero-simple" ref="hero" :style="styles" >
        <RisingSquares  ></RisingSquares>
        <div class="overlay" v-if="overlay"></div>

        <div class="container">            
            <div class="hero-simple-wrapper">

                <header class="hero-simple-content" ref="content">
                    <h1 class="hero-simple-title"  v-if="title">
                        {{ title }}
                    </h1>
                    <p class="hero-simple-description" v-if="description">
                        {{ description }}
                    </p>

                    <NuxtLink :to="ctaLink" class="button button-lg button-black" v-if="ctaText" @click="$emit('cta-click')" >
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