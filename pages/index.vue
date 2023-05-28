<script setup>

const {data : articles } = await useFetch(() => `/api/posts`, {
    params:{
        limit: 8,
        published: true,
    }
})




</script>

<template>
    <main class="home-page site-content ">

        <section class="articles-section section pb-5">
            <div class="container">
                <header class="section-header">
                    <h1 class="section-title">Explore Practical Software Development Articles.</h1>

                </header>
                <div class="two-columns-grid articles-grid">
                    <Article-link
                        v-for="article in articles" 
                        :key="article.id"
                        :article="article" 
                    />
                </div>
            </div>
        </section>

    </main>
</template>
