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
                <h1>Create Post</h1>
                
                <Tiptap />                
            </div>        
        </section>

    </main>
</template>
