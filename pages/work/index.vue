<script setup>

const route = useRoute();
const limit = useState(() => 20)

const page = useState(() => route.query.page ? parseInt(route.query.page) : 1)
const {data : projects } = await useFetch(`/api/projects`, {
    params:{
        page: page,
        limit: limit
    }
})

onUpdated(() => {
    page.value = Number.parseInt(route.query.page) || 1
})


</script>

<template>
    <main class="site-content">
        <section class="articles-section section" >
            <div class="container">
                <header class="section-header">
                    <h1 class="section-title">My Recent Work.</h1>
                </header>
                <div class="two-columns-grid articles-grid" v-if="projects.length">
                    <Article-link
                        v-for="project in projects" 
                        :key="project.id"
                        :article="project" 
                        urlPrefix="/work/"
                    />
                </div>


                <div v-if="projects.length == limit">
                    <NuxtLink :to="page > 1 ? '/work?page=' + (page - 1) : ''" class="button">Previous</NuxtLink>
                    <NuxtLink :to="'/work?page=' + (page + 1)" class="button">Next</NuxtLink>
                </div>
                <div class=" " v-if="limit > projects.length">
                    <h5 class="font-weight-medium">That's all for me for now</h5>
                </div>


            </div>
        </section>


    </main>
</template>
