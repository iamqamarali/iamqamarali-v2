<script setup>

const {data : articles, error, pending, refresh } = await useFetch('/api/posts/latest')

</script>

<template>
    <main class="home-page site-content ">

        <section class="articles-section section">
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
