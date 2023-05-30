<template>
    <div class="blob" ref="blob"></div>
    <section class="main"></section>
</template>

<script setup>

const blob = ref(null)

const { x, y } = useMousePosition();

watch([x, y], ()=>{
    blob.value.animate({
        left:`${x.value}px`,
        top:`${y.value}px`
    },{duration:3000, fill:"forwards"})

})


</script>

<style lang="scss">

.main{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  backdrop-filter:blur(100px) ;
  //display: none;
}

.blob{
  height: 60vh;
  height: 60dvh;
  background-color: white;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  background: linear-gradient(to right, #fbeaba, #ffc47b);
  animation: rotate 2s ease-in-out infinite;
  /* z-index: -1; */
}
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  50%{
    scale: 1 1.5;
  }
  100%{
    transform: rotate(360deg);
  }
}

</style>