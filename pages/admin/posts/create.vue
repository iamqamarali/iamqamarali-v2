<script setup>

// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})


</script>

<template>
    <main class="posts-page">
        <h1>Create Post</h1>

        <p>This route should be protected</p>

        <Tiptap />

    </main>
</template>
