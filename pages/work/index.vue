<script setup>

const route = useRoute();
const limit = useState(() => 10)

const page = useState(() => route.query.page ? parseInt(route.query.page) : 1)
const {data : projects } = await useFetch(`/api/projects`, {
    params:{
        page: page,
        limit: limit,
        published: true,
    }
})

onUpdated(() => {
    page.value = Number.parseInt(route.query.page) || 1
})


</script>

<template>
    <main class="site-content">
        <section class="articles-section section" >
            <div class="container-small">
                <header class="section-header">
                    <h1 class="page-title">My Recent Work.</h1>
                </header>

                <div class="section-content" v-if="projects.length">
                    <Project
                       v-for="(project, index) in projects" 
                        :key="project.id"
                        :project="project"  
                        :class="{ 'project-right' : index % 2 == 0 }"
                        image="https://uploads.toptal.io/blog/image/129115/toptal-blog-image-1549997512620-72eaff97494e5c220c505505fdfa11fb.jpg"
                        >
                    </Project>
                </div>


                <div v-if="projects.length == limit" class="buttons-group float-right">
                    <NuxtLink 
                        :to="page > 1 ? '/work?page=' + (page - 1) : ''" 
                        class="button button-black" 
                        >
                        Previous
                    </NuxtLink>
                    <NuxtLink 
                        :to="'/work?page=' + (page + 1)" 
                        class="button button-black" 
                        >
                        Next
                    </NuxtLink>
                </div>
                <div class=" " v-if="limit > projects.length">
                    <h5 class="font-weight-medium">That's all for me for now</h5>
                </div>
                <div class="clear-both"></div>


            </div>
        </section>


    </main>
</template>
