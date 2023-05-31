<template>
    <div class="interactive-blob-container">
        <div class="blob" ref="blob"></div>
        <section class="main"></section>
    </div>
</template>

<script setup>

const props = defineProps(['background'])

const blob = ref(null)
const { x, y } = useMousePosition();

watch([x, y], ()=>{
    blob.value.animate({
        left:`${x.value}px`,
        top:`${y.value}px`
    },{duration:0, fill:"forwards"})
})

onMounted(()=>{
    // set gradient  to blob
    if(props.background){
        blob.value.style.background = props.background
    }


})


</script>

<style lang="scss">

.interactive-blob-container{
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    
}

.main{
	width: 100%;
	height: 100%;
	position: absolute;
}

.blob{
    --blob-size: 40vh;

    animation: rotate 20s infinite;
	filter: blur(calc(var(--blob-size)/2.15));
	
	height: var(--blob-size);
    aspect-ratio: 1;

    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;

    background-color: #fff5d8;

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