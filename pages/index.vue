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
        rootMargin: '0px 0px -40% 0px'
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
            title="Qamar Ali <br/> Full Stack Web Developer"
            description="I'm a computer scientist and I empower businesses to revolutionize their digital presence with scalable, cutting-edge full-stack web applications and SaaS products that scale to millions of users."
        >
        </hero-fullscreen>

        <!-- ctaText="Start a project"
            ctaLink="/contact" -->


        <!-- subtitle="Sr. Full Stack Web Developer" -->

        <!-- About Section -->
        <div class="section about-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title ">
                         About Me
                    </h2>
                </div>

                <div class="section-content">
                    <div class="two-columns-grid ">
                        <div class="left fade-slide-up" >
                            <p>
                                Hi, my name is Qamar, I’m a Senior Full Stack Developer with a passion for building impactful web applications.
                            </p>
                            <p>
                                My journey into web development began in 2017 when I first dabbled with changing a button's position on a webpage—and I’ve been hooked ever since. What started as curiosity has transformed into a fulfilling career where I design and develop applications that engage thousands of users daily.

                            </p>
                            <p>
                                Today, I focus on empowering small businesses to establish a strong digital presence. Through my expertise in web development, I help entrepreneurs enhance their digital experiences and achieve remarkable growth in an ever-evolving online landscape.
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
                    <h2 class="section-title">
                        <span>
                            Things I've Built
                        </span>
                    </h2>
                </header>
            </div>
            <div class="section-content">
                <div class="container">
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


        <!-- Services Section -->
        <!-- <section class="services-section section" v-if="articles.length">
            <div class="container">
                <header class="section-header section-header-small">
                    <h2 class="section-title ">
                        Services
                    </h2>
                </header>
            </div>
            <div class="container-small">
                <div class="three-columns-grid articles-grid">
                    <div class="service">
                        <div class="service-title">Front-End Development</div>

                    </div>
                    <div class="service">
                        <div class="service-title">Back-End Development</div>

                    </div>
                    <div class="service">
                        <div class="service-title">Full-Stack Development</div>

                    </div>
                </div>
            </div>            
        </section> -->
        
        <!-- Blog Section -->
        <section class="articles-section section" v-if="articles.length">
            <div class="container">
                <header class="section-header section-header-small">
                    <h2 class="section-title ">
                        Explore Practical Software Development Articles.
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




        <!-- Start a project Section -->
        <!-- <section class="contact-section section" >
            <div class="container-small">
                <header class="section-header section-header-small">
                    <h2 class="section-title ">
                        Start A Project
                    </h2>
                </header>

                <div class="section-content">
                    <p>
                        My inbox is always open for new opportunities,
                        If you have a project that you want to get started, 
                        think you need my help with something or just fancy saying hey, 
                        then feel free to get in touch, I will try my best to get back to you ASAP!
                    </p>

                    <div class="text-center">
                        <NuxtLink class="button button-lg button-black">Send A Message</NuxtLink>    
                    </div>

                </div>
            </div>            
        </section> -->


    </main>
</template>
