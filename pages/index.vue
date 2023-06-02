<script setup>

useHead({
    bodyAttrs: {
        class: 'has-fixed-header'
    },
})


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

        <!-- Hero Section -->
        <hero-fullscreen
            class="home-hero"
            title="Qamar Ali."
            subtitle="Full Stack Web Developer"
            description="I'm a software enginner specializing in Developing & Deploying Full stack Web Applications and SAAS Products that scale to millions of users."
            ctaText="Start a project"
            ctaLink="/contact"
            arrowDownTitle="About"
        >
        </hero-fullscreen>

        <!-- subtitle="Sr. Full Stack Web Developer" -->
    
        <!-- About Section -->
        <div class="section about-section">
            <div class="container-small">
                <div class="section-content">
                    <div class="two-columns-grid ">
                        <div class="left">
                            <h2 class="section-title title-dashed">
                                <span class="section-count">01.</span>About.
                            </h2>

                            <p>
                                Hello! My name is Qamar and I build things that live on the internet.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, suscipit explicabo! Eligendi nemo ea eos delectus quia est sequi unde minima, labore, laboriosam aliquam non eaque ut nostrum fugit dignissimos?</p>
                        </div>
                        <div class="my-image-container">
                            <div class="my-image-wrapper-1">
                                <div class="my-image-wrapper-2">
                                    <img class="my-image" src="https://iamqamarali-1.web.app/images/my-pics/me3.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



        <!-- Projects Section -->
        <section class="section projects-section">
            <div class="container-small">
                <header class="section-header">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">02.</span> Things I've Built
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

        <!-- Skills Section -->
        <Skills></Skills>
        
        <!-- Blog Section -->
        <section class="articles-section section" v-if="articles.length">
            <div class="container-small">
                <header class="section-header section-header-small">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">04.</span> 
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
