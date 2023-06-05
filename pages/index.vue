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
    title: "Qamar Ali - Web Developer",
    description: "A software enginner/web developer specializing in Developing & Deploying Full Stack Web Applications that scale to millions of users.",
    robots: 'index, follow',
    ogTitle: "Qamar Ali | Full Stack Web Developer",
    ogDescription: "A software enginner/web developer specializing in Developing & Deploying Full stack Web Applications that scale to millions of users.",
    ogUrl: useAppConfig().APP_BASE_URL ,
    ogType: 'website',
})
useHead({
    link: [
        { rel: 'canonical', href: useAppConfig().APP_BASE_URL + useRoute().path }
    ]
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
                                Hi, my name is Qamar, I’m a Sr. Full Stack Developer and I build things that live on the WEB.
                            </p>
                            <p>
                                My journey to web development started in 2016 when I saw a friend of mine trying to change the position of a button on a webpage, i thought of trying it out myself and i fall head first into the rabbit hole of web development and coding.
                            </p>
                            <p>
                                Fast forward to today I’ve built web applications that gain traction from thousands of users ever day.
                                These days i'm helping small businesses in cultivating a robust online presence, with my web development skills I empower entrepreneurs to expand their digital experiences and achieve remarkable growth in the ever-evolving online landscape.
                            </p>
                            <p>
                                Other than that I occasionally contribute to open source on <a href="https://github.com/iamqamarali" target="_blank">GIthub</a>, and write <NuxtLink :to="'/articles'" target="_blank">articles</NuxtLink> about new and cool tech related stuff on my blog.
                            </p>
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
                        :number="index+1"
                        >
                    </Project>

                    <div class="text-center show-more-button-wrapper">
                        <NuxtLink to="/work" class="button button-black ">More Projects</NuxtLink>
                    </div>

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

                <div class="text-center show-more-button-wrapper">
                    <NuxtLink to="/articles" class="button button-black ">More Articles</NuxtLink>
                </div>


            </div>
        </section>

    </main>
</template>
