<script setup>
defineProps({
    article: Object
})

</script>

<template>
    <NuxtLink :to="'/article/' + article.slug" class="article-link">
        <div class="article-data-container">
            <div class="article-image-container">
                <img :src="article.main_image" :alt="article.title" class="article-image">
            </div>
            <div class="article-data">
                <h2 class="article-title" > {{ article.title }}</h2>
                <p class="article-description">{{ article.description }} </p>
                <div class="article-metadata">
                    {{ dateUtil.diffForHumans(article.created_at) }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
