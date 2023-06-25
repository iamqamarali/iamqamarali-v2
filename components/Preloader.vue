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


        <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
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
    .spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}

.cube1, .cube2 {
  background-color: #333;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes sk-cubemove {
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}


}
</style>