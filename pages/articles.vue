<script setup>

const route = useRoute();
const router = useRouter();

const page = useState(() => route.query.page ? parseInt(route.query.page) : 1)
const {data : articles } = await useFetch(() => `/api/posts?page=${page.value}&limit=20`)

watch(page, () => {
    router.push({
        query: { page: page.value }
    })
})


</script>

<template>
    <main class="site-content">
        <section class="articles-section section" v-if="articles.length">
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

                <button @click.prevent="page--">Previous</button>
                <button @click.prevent="page++">Next</button>

            </div>
        </section>

        <section class="section " v-else>
            <div class="container">
                <div class="section-header">
                    <div class="section-title">No More Articles</div>
                </div>
            </div>
        </section>

    </main>
</template>
