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



</script>

<template>
    <main class="article-page site-content" v-if="project">
        <div class="container">
            <div class="article-hero">
                <div class="article-header">
                    <h1 class="article-title">{{ project.title }}</h1>
                    <div class="article-subtitle">
                        <strong class="article-author mr-10">
                            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=100" alt="author image" class="author-image">
                            <span class="author-name">Qamar Ali,</span>    
                        </strong>
                        <span class="article-date"> {{ dateUtil.diffForHumans(project.created_at) }}</span>
                    </div>
                </div>

                <div class="article-hero-image-container">
                    <img :src="project.main_image" alt="" >
                </div>

            </div>

            <article class="article-body" v-html="project.body"></article>

        </div>
    </main>
</template>

<style>
    .highlight{
        display: none
    }
</style>

