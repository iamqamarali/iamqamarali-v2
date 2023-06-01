<script setup>

const nuxtApp = useNuxtApp();

const initialPageLoad = useState( () => true)
const loader = ref(null)

nuxtApp.hook('page:finish', ()=>{
    if(initialPageLoad.value){
        setTimeout(() => {
            initialPageLoad.value = false
            // bring scrollbar back
            document.body.style.overflow = 'auto'
        }, 1000);
     }
});

onBeforeUnmount(() => ()=>{
    
});

onMounted(() => {
    // hide scrollbar
    document.body.style.overflow = 'hidden'
})


</script>

<template>
    <div class="preloader-wrapper" :class="{'hide' : !initialPageLoad}" ref="loader">
        <logo></logo>

        <section >
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
            <div class="dots"></div>
        </section>


    </div>
</template>

<style lang="scss">
body{
    overflow: hidden;
}

.preloader-wrapper{
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index:10;
    background: var(--primary-gradient);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s cubic-bezier(0.71, 0.15, 0.19, 0.85);

    &.hide{
        transform: translateY(-100%);  
    }

    .logo{
        position: absolute;
        padding-top: 1rem;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        .logo-svg{
            width: 100px;
        }

    }


    //asd asd asd asd asd



    @for $i from 1 through 20 {
        .dots:nth-child(#{$i}) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: rotate($i*18deg);
            opacity: 0.8;
            z-index: -$i;
            
            &:before {
                content: '';
                width: 2px;
                height: 1px;
                position: absolute;
                background: #000;
                transform-origin: -50px 50px;
                animation: magic 2.5s ease infinite alternate;
                animation-delay: $i*0.07s;
                -webkit-box-reflect: below;
            }
            
            &:after {
                content: '';
                width: 1px;
                height: 20px;
                position: absolute;
                background: #000;
                transform-origin: -50px 50px;
                animation: magic 2s ease infinite alternate;
                animation-delay: $i*0.075s;
                -webkit-box-reflect: right 10px;
            }
        }
        
        @keyframes magic {
            0% {
                transform: scale(1) skew(0deg);
            }
            100% {
                transform: scale(2) skew(10deg);
            }
        }
    }


}
</style>