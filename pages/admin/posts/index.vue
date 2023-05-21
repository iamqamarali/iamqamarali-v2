<script setup>
// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

</script>

<template>
    <main class="posts-page">
        <section class="section">
            <div class="container">
                <h1 >Posts</h1>
                <p>Amazing posts about coding that you wanna read everyday to grow your coding career to next level, that you're trying every hard to achieve.</p>
                

                <NuxtLink class="button" to="/admin/posts/create">
                    Create Post
                </NuxtLink>
            </div>
        </section>

    </main>
</template>
