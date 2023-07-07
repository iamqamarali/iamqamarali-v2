<script setup>
const props = defineProps(['image', 'project', 'number'])

const getTags = (tags) => {
    if(tags && tags.length) 
        return tags.split(',').map(tag => tag.trim())

    return "";
}

</script>

<template> 
    <div class="project" >
        <div class="project-image-wrapper">
            <div class="project-image-wrapper-inner">
                <img class="project-image" :src="project.main_image" alt="">
                <NuxtLink :to="'/work/'+project.slug" class="overlay"></NuxtLink>
            </div>
            <div class="project-number" v-if="number">{{ number }}</div>
        </div>

        <div class="project-content">
            <h4 class="project-name">
                <NuxtLink :to="'/work/'+project.slug" class="link-default">{{ project.title }}</NuxtLink>
            </h4>
            <p class="project-description">
                {{ project.description }}
            </p>
            <div class="project-skills">
                <!-- <span v-for="tag in getTags(project.tags)" class="tag">{{ tag }}</span> -->
                <span v-for="tag in getTags(project.tags)" >{{ tag }}</span>
            </div>
            <div class="project-links">
                <NuxtLink :to="'/work/'+project.slug" class="show-project button button-black ">
                    <span class="mr-15">Cast Study</span>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        class="svg-icon"
                        viewBox="0 0 100.000000 100.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M712 728 c-22 -22 -12 -42 54 -115 l65 -73 -397 -2 c-365 -3 -398 -4
                        -408 -20 -8 -13 -8 -23 0 -35 10 -17 43 -18 408 -21 l397 -2 -65 -73 c-36 -39
                        -66 -79 -66 -88 0 -20 20 -39 40 -39 19 0 230 221 230 240 0 19 -211 240 -230
                        240 -9 0 -21 -5 -28 -12z"/>
                        </g>
                    </svg>

                </NuxtLink>
            </div>

        </div>

    </div>
</template>
