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
            <a href="" class="overlay"></a>
        </div>

        <div class="project-content">
            <h4 class="project-name">{{ project.title }}</h4>
            <p class="project-description">
                {{ project.description }}
            </p>
            <div class="project-skills">
                <span v-for="tag in getTags(project.tags)">{{ tag }}</span>
            </div>
            
            <!-- <a href="" class="project-link button button-sm  ">View Project</a> -->


        </div>
    </div>
</template>
