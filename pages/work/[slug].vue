<script setup>
const route = useRoute()
const { slug } = route.params

const { data : project, error, pending, refresh } = await useFetch('/api/projects/' + slug)


if(!project.value){
    throw createError({
        statusCode: 404,
        message: 'Project not found'
    });
}

useSeoMeta({
    title: project.value.title,
    description: project.value.description,
    robots: 'index, follow',

    ogTitle: project.value.title,
    ogDescription: project.value.description,
    ogUrl: useAppConfig().APP_BASE_URL + route.path,
    ogImage: project.value.main_image,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterImage: project.value.main_image,

    'article:published_time': project.value.created_at,
})
useHead({
    link: [
        { rel: 'canonical', href: useAppConfig().APP_BASE_URL + route.path }
    ]
})

const getTags = (tags) => {
    if(tags && tags.length) 
        return tags.split(',').map(tag => tag.trim())

    return "";
}


let colors = [
    '#ffd7a3',
]

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}




</script>

<template>
    <main class="project-page site-content" v-if="project">
            <div class="project-hero">
                <div class="project-header">
                    <h1 class="project-title">{{ project.title }}</h1>
                    <div class="project-description">{{ project.description }}</div>
                    <div class="tags">
                        <span class="tag"
                            v-for="tag in getTags(project.tags)">
                            {{ tag }}
                        </span>
                    </div>           
                </div>
                <div class="project-hero-image-container">
                    <img :src="project.main_image" alt="" >
                    <div class="overlay"></div>
                </div>

            </div>

            <div class="project-body">    

                <article class="article-body" v-html="project.body"></article>

            </div>
            


    </main>
</template>

<style>
    .highlight{
        display: none
    }
</style>

