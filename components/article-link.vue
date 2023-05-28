<script setup>
defineProps({
    article: Object,
    urlPrefix:{
        type: String,
        default: '/article/'
    }
})



</script>

<template>
    <NuxtLink :to="urlPrefix + article.slug" class="article-link">
        <div class="article-data-container">
            <div class="article-image-container">
                <img :src="article.main_image" :alt="article.title" class="article-image">
            </div>
            <div class="article-data">
                <h2 class="article-link-title" > {{ article.title }}</h2>
                <p class="article-link-description">{{ article.description }} </p>
                <div class="article-link-metadata">
                    {{ dateUtil.diffForHumans(article.created_at) }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
