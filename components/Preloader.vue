<script setup>

const nuxtApp = useNuxtApp();

const initialPageLoad = useState('initial-page-load', () => true)
const loader = ref(null)

nuxtApp.hook('page:finish', ()=>{
  if(initialPageLoad.value){
    const animation = loader.value.animate({
        transform: ['translateY(0)', 'translateY(-100%)']
    }, {
        delay: 0,
        duration: 1000,
        easing: 'cubic-bezier(.13,.01,.01,1)',
        fill: 'forwards'
    })
    animation.onfinish = () => {
        initialPageLoad.value = false
        // bring scrollbar back
        document.body.style.overflow = 'auto'
    }
  }
});

onBeforeUnmount(() => ()=>{
    
});


</script>

<template>
    <div class="preloader-wrapper" ref="loader">
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
    background: #e8d3a8;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo{
        position: absolute;
        padding-top: 1rem;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
    }

    /**
    *
    *
    */
.spinner {
  margin: 100px auto;
  width: 100px;
  height: 100px;
  position: relative;
}

.cube1, .cube2 {
  background-color: #333;
  width: 25px;
  height: 25px;
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
  25% { -webkit-transform: translateX(65px) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(65px) translateY(65px) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(65px) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes sk-cubemove {
  25% { 
    transform: translateX(65px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(65px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(65px) translateY(65px) rotate(-179deg);
    -webkit-transform: translateX(65px) translateY(65px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(65px) translateY(65px) rotate(-180deg);
    -webkit-transform: translateX(65px) translateY(65px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(65px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(65px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}


}
</style>