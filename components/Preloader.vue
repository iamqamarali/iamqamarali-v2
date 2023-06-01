<script setup>
const app = useNuxtApp()

const loader = ref(null)

const startPreloader = () => {
    var circles = Array.from(loader.value.querySelectorAll('.circle'));
    
    var tl = new TimelineMax()

    TweenMax.set(circles, {scale: 0});

    tl.insert(
        TweenMax.staggerTo(circles, 1, {
            opacity: 1,
            scale: 1,
            ease: Power1.easeIn
        }, 0.2)
    );

    tl.insert(
        TweenMax.staggerTo(circles, 0.5, {
            scale: 1.2,
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.4)',
            repeat: -1,
            yoyo: true,
            ease: Power1.easeOut
        }, 0.2), '-=0.4'
    );
}



const nuxtApp = useNuxtApp();
nuxtApp.hook('page:start', ()=>{
    show.value = true
    startPreloader()
});
nuxtApp.hook('page:finish', ()=>{
});

onBeforeUnmount(() => ()=>{
    
});

onMounted(()=>{
    startPreloader()
})

</script>

<template>      
    <div class="preloader" ref="loader" >
        <div class="logo-container">
            <logo></logo>
        </div>

        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
    </div>
</template>

<style lang="scss" >



.preloader {
    --primary-lighter: #ffd199; 
    --primary-light: #ffb962; 
    --primary: #ffab44; 
    
    --base-width: 150px;

    @media screen and (max-width: 735px) {
        --base-width: 70px;
    }

    background: var(--primary-gradient);
    position: fixed;
    inset: 0;
    z-index: 10;
    width: 100%;
    height: 100%;

    .logo-container{
        position: absolute;
        padding-top: 1rem;
        top: 7%;
        left: 50%;
        transform: translateX(-50%);
    }


    .circle {
        border-radius: 190px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 0;
    }

    .circle1 {
        background-color: var(--primary);
        width: calc(var(--base-width) + 140px);
        height: calc(var(--base-width) + 140px);;
        top: calc( 50% - calc( calc(var(--base-width) + 140px) / 2 ));
        left: calc( 50% - calc( calc(var(--base-width) + 140px) / 2 ));

    }

    .circle2 {
        background-color: var(--primary-light);
        width: calc(var(--base-width) + 70px);
        height: calc(var(--base-width) + 70px);;
        top: calc( 50% - calc( calc(var(--base-width) + 70px) / 2 ));
        left: calc( 50% - calc( calc(var(--base-width) + 70px) / 2 ));
    }

    .circle3 {
        background-color: var(--primary-lighter);
        width: var(--base-width);
        height: var(--base-width);
        top: calc( 50% - calc( var(--base-width) / 2 ));
        left: calc( 50% - calc( var(--base-width) / 2 ));
    }
}


</style>