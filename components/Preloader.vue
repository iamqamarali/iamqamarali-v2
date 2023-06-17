<script setup>

const nuxtApp = useNuxtApp();

const initialPageLoad = useState('initial-page-load', () => true)
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


</script>

<template>
    <div class="preloader-wrapper" :class="{'hide' : !initialPageLoad}" ref="loader">
        <logo></logo>

        <!-- <section >
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
        </section> -->


        <div class="sk-folding-cube">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>


    </div>
</template>

<style lang="scss">
body{
    overflow: hidden;
}

.preloader-wrapper{
    --preloader-color: #222;

    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index:10;
    background: var(--primary);
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

    /**
    *
    *
    */
    .sk-folding-cube {
    margin: 20px auto;
    width: 40px;
    height: 40px;
    position: relative;
    -webkit-transform: rotateZ(45deg);
            transform: rotateZ(45deg);
    }

    .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1); 
    }
    .sk-folding-cube .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--preloader-color);
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
            animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
    }
    .sk-folding-cube .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
            transform: scale(1.1) rotateZ(90deg);
    }
    .sk-folding-cube .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
            transform: scale(1.1) rotateZ(180deg);
    }
    .sk-folding-cube .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
            transform: scale(1.1) rotateZ(270deg);
    }
    .sk-folding-cube .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
    }
    .sk-folding-cube .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s; 
    }
    .sk-folding-cube .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
    }
    @-webkit-keyframes sk-foldCubeAngle {
    0%, 10% {
        -webkit-transform: perspective(140px) rotateX(-180deg);
                transform: perspective(140px) rotateX(-180deg);
        opacity: 0; 
    } 25%, 75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
                transform: perspective(140px) rotateX(0deg);
        opacity: 1; 
    } 90%, 100% {
        -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
        opacity: 0; 
    } 
    }

    @keyframes sk-foldCubeAngle {
    0%, 10% {
        -webkit-transform: perspective(140px) rotateX(-180deg);
                transform: perspective(140px) rotateX(-180deg);
        opacity: 0; 
    } 25%, 75% {
        -webkit-transform: perspective(140px) rotateX(0deg);
                transform: perspective(140px) rotateX(0deg);
        opacity: 1; 
    } 90%, 100% {
        -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
        opacity: 0; 
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