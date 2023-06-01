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

useSeoMeta({
    title: "Qamar Ali | Web Developer",
    description: "A software enginner, web developer specializing in Developing & Deploying Full Stack Web Applications that scale to millions of users.",
    robots: 'index, follow',
    ogTitle: "Qamar Ali | Sr. Full Stack Web Developer",
    ogDescription: "A software enginner, web developer specializing in Developing & Deploying Full stack Web Applications that scale to millions of users.",
    ogUrl: useAppConfig().APP_BASE_URL ,
    ogType: 'website',

})



</script>

<template>
    <main class="home-page site-content ">

        <hero-fullscreen
            title="Qamar Ali."
            subtitle="Sr. Full Stack Web Developer"
            description="I'm a software enginner specializing in Developing & Deploying Full stack Web Applications and SAAS Products that scale to millions of users."
            ctaText="Start a project"
            arrowDownTitle="Things I've Built"
        >
        </hero-fullscreen>

        <!-- About Section -->
        <!-- <div class="section pb-25">
            <div class="container-small">
                <div class="section-hea">
                    <h2 class="section-title title-dashed">
                        <span class="section-count">01.</span>About.
                    </h2>
                </div>
                <div class="section-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ea tenetur libero nobis, maiores sapiente officia cum voluptas, quam fugiat veniam adipisci consequuntur optio totam quas non deleniti ducimus ipsa.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque amet distinctio omnis nesciunt quas officiis atque debitis, rerum expedita tempora
                    </p>
                </div>

            </div>
        </div>
 -->

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

        <Skills></Skills>
        

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
