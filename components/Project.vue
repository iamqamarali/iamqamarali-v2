<script setup>
defineProps(['image'])



</script>

<template>
    <div class="project" >
        <div class="project-image-container">
            <img class="project-image" :src="image" alt="">
            <a href="" class="overlay"></a>
        </div>

        <div class="project-content">
            <h4 class="project-name">Google Keeps</h4>
            <p class="project-description">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
            </p>
            <div class="project-skills">
                <span>Vue</span>
                <span>Express</span>
                <span>Nuxt</span>
                <span>API</span>
                <span>Vercel</span>
            </div>
            
            <!-- <a href="" class="project-link button button-sm  ">View Project</a> -->


        </div>
    </div>
</template>
