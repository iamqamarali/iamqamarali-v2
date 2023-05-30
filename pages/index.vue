<script setup>

const {data : articles } = await useFetch(() => `/api/posts`, {
    params:{
        limit: 4,
        published: true,
    }
})




</script>

<template>
    <main class="home-page site-content ">

        <div class="container-small ">
            <section class="home-hero ">
                
                    <div class="home-hero-wrapper">
                        <!-- <div class="home-hero-avatar-container">
                            <img src="@/assets/images/avatar.svg" alt="">
                        </div> -->

                        <header class="home-hero-content">
                            <FlyingPlane></FlyingPlane>

                            <h1 class="home-hero-title page-title">
                                Qamar Ali
                            </h1>
                            <h3 class="home-hero-subtitle">
                                Sr. Full Stack Web Developer
                            </h3>
                            <p class="home-hero-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt quo voluptatum ipsam dignissimos quod.
                            </p>
                            <a href="" class="button button-lg">Call To Action</a>
                        </header>

                    </div>
            </section>
        </div>
        <ClientOnly>
            <DudeWalking></DudeWalking>
        </ClientOnly>
        

        <section class="section things-ive-built-section">
            <div class="container-small">
                <header class="section-header">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">01.</span> Things I've Built
                        </span>
                    </h2>
                </header>
                <div class="section-content ">
                    <Project image="https://cxl.com/wp-content/uploads/2020/04/image-65-1024x594.png" ></Project>
                    <Project class="project-right" image="https://uploads.toptal.io/blog/image/129115/toptal-blog-image-1549997512620-72eaff97494e5c220c505505fdfa11fb.jpg"></Project>
                    <Project image="https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-9.png"></Project>

                </div>
            </div>
        </section>


        <section class="section  skills-section">
            <div class="container-small">
                <header class="">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">03.</span> Skills
                        </span>
                    </h2>
                </header>
                <div class="section-content">
                    <p>
                        There are countless technologies and frameworks that one can use as a Web Developer 
                        and i love learning and would love to learn them all, but if you want to master something
                        you cannot jump from one technology to another the next day. Mastering a technology requires time and practice 
                        and below are the technologies that i can proudly say <strong>i've mastered in my 7 year career (for future more is comming)</strong>. 
                        To simplify (Vue.js, Nuxt.js, Laravel, Node).
                    </p>
                    <Skills></Skills>
                </div>
            </div>
        </section>

        <section class="articles-section section" v-if="articles.length">
            <div class="container-small">
                <header class="section-header section-header-small">
                    <h2 class="section-title title-dashed">
                        <span>
                            <span class="section-count">02.</span> 
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
