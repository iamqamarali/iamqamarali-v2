<script setup>
const route = useRoute()
const { slug } = route.params

const { data : post, error, pending, refresh } = await useFetch('/api/posts/' + slug)


if(!post.value){
    throw createError({
        statusCode: 404,
        message: 'Post not found'
    });
}


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

        </div>
    </main>
</template>

<style>
    .highlight{
        display: none
    }
</style>

