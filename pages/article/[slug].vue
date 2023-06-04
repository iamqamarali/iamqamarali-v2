<script setup>
const route = useRoute()
const { slug } = route.params

const { data : post, error, pending, refresh } = await useFetch(`/api/posts/${slug}`)


if(!post.value){
    throw createError({
        statusCode: 404,
        message: 'Post not found'
    });
}

useSeoMeta({
    title: post.value.title,
    description: post.value.description,
    robots: 'index, follow',

    ogTitle: post.value.title,
    ogDescription: post.value.description,
    ogUrl: useAppConfig().APP_BASE_URL + route.path,
    ogImage: post.value.main_image,
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterImage: post.value.main_image,

    'article:published_time': post.value.created_at,
})

useHead({
    link: [
        { rel: 'canonical', href: useAppConfig().APP_BASE_URL + route.path }
    ]
})


</script>

<template>
    <main class="article-page site-content" v-if="post">
        <div class="container">
            <div class="article-hero">
                <div class="article-header">
                    <h1 class="article-title">{{ post.title }}</h1>
                    <div class="article-subtitle">
                        <strong class="article-author mr-10">
                            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=100" alt="author image" class="author-image">
                            <span class="author-name">Qamar Ali,</span>    
                        </strong>
                        <span class="article-date"> {{ dateUtil.diffForHumans(post.created_at) }}</span>
                    </div>
                </div>

                <div class="article-hero-image-container">
                    <img :src="post.main_image" alt="" >
                </div>

            </div>

            <article class="article-body" v-html="post.body"></article>


            <!--  Create this section published by my picture and then some info about tme -->
            <!-- <div >
                <h4>Published By</h4>
            </div> -->

        </div>
    </main>
</template>

<style>
    .highlight{
        display: none
    }
</style>

