<script setup>

const nuxtApp = useNuxtApp();
const loader = ref(null)
const show = ref(true)

const initialPageLoad = useState('initialLoad', () => true)


const startAgain = () => {
    show.value = true

    loader.value.animate({
            transform: 'translateY(0%)'
        }, {
            duration: 200,
            easing: 'ease-in-out',
            fill: 'forwards'
        }, function(){
        })

}

const stop = () => {
    setTimeout(() => {
        loader.value.animate({
            transform: 'translateY(-100%)'
        }, {
            duration: 300,
            easing: 'ease-in-out',
            fill: 'forwards'
        }, function(){
            show.value = false
        })
    }, 1000);

}

nuxtApp.hook('page:start', ()=>{
    // startAgain()
});
nuxtApp.hook('page:finish', ()=>{
    if(initialPageLoad.value){
        stop();
        initialPageLoad.value = false
    }
});

onBeforeUnmount(() => ()=>{
    console.log("unmount")
    
});


</script>

<template>
    <div class="preloader-wrapper" ref="loader" v-if="show">


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

    .logo{
        position: absolute;
        padding-top: 1rem;
        top: 5%;
        left: 50%;
        transform: translateX(-50%)

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