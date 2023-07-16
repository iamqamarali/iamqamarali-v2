<script setup>

const { toggleSkin, isLight } = useSkin();

const changeSkin = () => {
    toggleSkin();
}

const { hasWhiteText } = useHeader();

onMounted(()=>{
    
})


</script>
<template>
    <!-- hasWhiteText -->
    <header class="site-header" :class="{ 'text-white' : hasWhiteText }">
        <div class="header-inner-wrapper">
            <div class="container">
                <logo class="logo-svg-white"></logo>
                <div class="nav">
                    <NuxtLink to="/articles" class="nav-item">Articles</NuxtLink>    
                    <NuxtLink href="/work" class="nav-item">Work</NuxtLink>   
                    <NuxtLink href="/contact" class=" button ">Start a project</NuxtLink> 

                </div>
            </div>
        </div>        
    </header>
</template>

