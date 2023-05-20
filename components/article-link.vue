<script setup>
defineProps({
    post: Object
})

</script>

<template>
    <NuxtLink :to="'/article/' + post.slug" class="article-link">
        <div class="article-data-container">
            <div class="article-image-container">
                <img :src="post.main_image" :alt="post.title" class="article-image">
            </div>
            <div class="article-data">
                <h2 class="article-title" > {{ post.title }}</h2>
                <p class="article-description">{{ post.description }} </p>
                <div class="article-metadata">
                    {{ dateUtil.diffForHumans(post.created_at) }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
