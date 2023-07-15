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
    title: "Qamar Ali - Full Stack Web Developer",
    description: "I'm a computer scientist and I empower businesses to revolutionize their digital presence with scalable, cutting-edge full-stack web applications and SaaS products that scale to millions of users.",
    robots: 'index, follow',
    ogTitle: "Qamar Ali | Full Stack Web Developer",
    ogDescription: "A compiter scientist / web developer, expert in Developing & Deploying Full stack Web Applications that scale to millions of users.",
    ogUrl: useAppConfig().APP_BASE_URL ,
    ogType: 'website',
})
useHead({
    link: [
        { rel: 'canonical', href: useAppConfig().APP_BASE_URL + useRoute().path }
    ]
})


/**
 * 
 * scroll animation on page
 */
const page = ref(null);
const animatePage = () => {
    const { createFadeSlideUp } = useAnimations();

    // intersection observer
    const observerOptions = {
        rootMargin: '0px 0px -30% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting ) {
                let animation = createFadeSlideUp(entry.target, index)
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    page.value.querySelectorAll('.fade-slide-up')
    .forEach((elm) => {
        elm.style.opacity = 0;
        observer.observe(elm)
    })
}


onMounted(() => {
    animatePage()
})


</script>

<template>
    <main class="home-page site-content " ref="page">

        <!-- Hero Section -->
        <hero-fullscreen
            class="home-hero"
            title="Qamar Ali"
            subtitle="Full Stack Web Developer"
            description="I'm a computer scientist and I empower businesses to revolutionize their digital presence with scalable, cutting-edge full-stack web applications and SaaS products that scale to millions of users."
            arrowDownTitle="About"
        >
        </hero-fullscreen>

        <!-- ctaText="Start a project"
            ctaLink="/contact" -->


        <!-- subtitle="Sr. Full Stack Web Developer" -->

        <!-- About Section -->
        <div class="section about-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title text-center font-size-7xl">
                        <span class="section-count">01.</span>About.
                    </h2>
                </div>

                <div class="section-content">
                    <div class="two-columns-grid ">
                        <div class="left fade-slide-up" >
                            <p>
                                Hi, my name is Qamar, I’m a Sr. Full Stack Developer and I build things that live on the Web.
                            </p>
                            <p>
                                My journey to web development started in 2016 when I saw a friend of mine trying to change the position of a button on a webpage, i thought of trying it out myself and i fall head first into the rabbit hole of web development and coding.
                            </p>
                            <p>
                                Fast forward to today I’ve built web applications that gain traction from thousands of users ever day.
                                These days i'm helping small businesses in cultivating a robust online presence, with my web development skills I empower entrepreneurs to enhance their digital experiences and achieve remarkable growth in the ever-evolving online landscape.
                            </p>
                            <p>
                                Other than that I occasionally contribute to open source on <a href="https://github.com/iamqamarali" target="_blank">GIthub</a>, and write <NuxtLink :to="'/articles'" target="_blank">articles</NuxtLink> about new and exciting tech related stuff on my blog.
                            </p>
                        </div>
                        <div class="my-image-container fade-slide-up">
                            <div class="my-image-wrapper-1">
                                <div class="my-image-wrapper-2">
                                    <img class="my-image" src="https://photos.qamarali.space/file/iamqamarali-blog/105/qamaralispace_1686434126285_3.87385404819536.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>



        <!-- Projects Section -->
        <section class="section projects-section">
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">02.</span> Things I've Built
                        </span>
                    </h2>
                </header>
                <div class="section-content">
                    <Project
                       v-for="(project, index) in projects" 
                        :key="project.id"
                        :project="project"  
                        :class="{ 'project-right' : index % 2 == 0, 'fade-slide-up': true }"
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
        <Skills class="fade-slide-up"></Skills>
        
        <!-- Blog Section -->
        <section class="articles-section section" v-if="articles.length">
            <div class="container">
                <header class="section-header">
                    <h2 class="section-title text-center font-size-7xl">
                        <span>
                            <span class="section-count">04.</span> 
                            Blog
                        </span>
                    </h2>
                </header>
            </div>
            <div class="container">
                <div class="three-columns-grid articles-grid">
                    <Article-link
                        v-for="article in articles" 
                        :key="article.id"
                        :article="article" 
                        class="fade-slide-up"
                    />

                </div>

                <div class="text-center show-more-button-wrapper">
                    <NuxtLink to="/articles" class="button button-black ">More Articles</NuxtLink>
                </div>

            </div>            
        </section>

    </main>
</template>
