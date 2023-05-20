<script setup>
// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

</script>

<template>
    <main class="posts-page">
        <h1>Posts</h1>

        <p>This route should be protected</p>

        <NuxtLink to="/admin/posts/create" class="btn btn-primary">
            Create Post
        </NuxtLink>

    </main>
</template>
