<script setup>
const props = defineProps(['image', 'project'])

const getTags = (tags) => {
    if(tags && tags.length) 
        return tags.split(',').map(tag => tag.trim())

    return "";
}

</script>

<template>
    <div class="project" >
        <div class="project-image-container">
            <img class="project-image" :src="image" alt="">
            <NuxtLink :to="'/work/'+project.slug" class="overlay"></NuxtLink>
        </div>

        <div class="project-content">
            <h4 class="project-name">
                <NuxtLink :to="'/work/'+project.slug" class="link-default">{{ project.title }}</NuxtLink>
            </h4>
            <p class="project-description">
                {{ project.description }}
            </p>
            <div class="project-skills">
                <span v-for="tag in getTags(project.tags)">{{ tag }}</span>
            </div>
        </div>

    </div>
</template>
