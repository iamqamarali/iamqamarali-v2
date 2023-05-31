<script setup>
const {data : articles } = await useFetch(() => `/api/posts`, {
    params:{
        limit: 4,
        published: true,
    }
})

const {data : projects } = await useFetch(`/api/projects`, {
    params:{
        limit: 3,
        published: true,
        featured: true,
    }
})


useHead({
    bodyAttrs: {
        class: 'has-fixed-header'
    },
})



</script>

<template>
    <main class="home-page site-content ">
        <hero-fullscreen
            title="Qamar Ali"
            subtitle="Sr. Full Stack Web Developer"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt quo voluptatum ipsam dignissimos quod."
            ctaText="Get in touch"
        >
        </hero-fullscreen>


        <section class="section projects-section">
            <div class="container-small">
                <header class="section-header">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">01.</span> Things I've Built
                        </span>
                    </h2>
                </header>
                <div class="section-content ">
                    <Project
                       v-for="(project, index) in projects" 
                        :key="project.id"
                        :project="project"  
                        :class="{ 'project-right' : index % 2 == 0 }"
                        image="https://uploads.toptal.io/blog/image/129115/toptal-blog-image-1549997512620-72eaff97494e5c220c505505fdfa11fb.jpg"
                        >
                    </Project>

                </div>
            </div>
        </section>

        <skills></skills>
        

        <section class="articles-section section" v-if="articles.length">
            <div class="container-small">
                <header class="section-header section-header-small">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">03.</span> 
                            Blog
                        </span>
                    </h2>
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
