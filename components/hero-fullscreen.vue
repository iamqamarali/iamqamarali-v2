
<script setup>

const props = defineProps({
    background: String,
    title: String,
    subtitle: String,
    description: String,
    arrowDownTitle: String,

    ctaText: String,
})
const emit = defineEmits(['cta-click'])


const hero = ref(null)
// set background if provided
onBeforeMount(()=>{
    if(props.background){
        hero.value.style.background = props.background
    }
})


// On First time Mount only Animate header text
const firstTimeMount = useState(() => true)
onMounted(()=>{
    if(firstTimeMount.value) {
        setTimeout(() => {
            animateHeaderText();
            setTimeout(() => { firstTimeMount.value = false }, 4000)
        }, 1500);
    }

})



const animateHeaderText = () => {
    let elements = hero.value.querySelectorAll('.animate')


    Array.from(elements).forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-slide-bar')
        }, index * 200)
    })    

    
}




</script>


<template>
    <section class="hero-fullscreen" ref="hero">
        <RisingSquares></RisingSquares>
        <HangingCat></HangingCat>

        <div class="container-small">            
            <div class="hero-fullscreen-wrapper">

                <header class="hero-fullscreen-content">
                    <h1 class="hero-fullscreen-title"  :class="firstTimeMount ? 'animate before-slide-bar' : '' " v-if="title">
                        {{ title }}
                    </h1>
                    <h3 class="hero-fullscreen-subtitle" :class="firstTimeMount ? 'animate before-slide-bar' : '' " v-if="subtitle">
                        {{ subtitle }}
                    </h3>
                    <p class="hero-fullscreen-description " :class="firstTimeMount ? 'animate before-slide-bar' : '' " v-if="description">
                        {{ description }}
                    </p>

                    <button class="button button-lg button-black " :class="firstTimeMount ? 'animate before-slide-bar' : '' " v-if="ctaText" @click="$emit('cta-click')" >
                        {{ ctaText }}
                    </button>

                    <slot name="default"></slot>                    
                </header>

            </div>
        </div>  


        <ScrollDownArrow v-if="arrowDownTitle" :title="arrowDownTitle"></ScrollDownArrow>

    </section>
</template>

<style lang="scss" >



</style>