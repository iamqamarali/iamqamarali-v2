<script setup>

// const {data : articles } = await useFetch(() => `/api/posts`, {
//     params:{
//         limit: 8,
//         published: true,
//     }
// })




</script>

<template>
    <main class="home-page site-content ">

        <section class="home-hero ">
            <div class="container-small ">
                
                <div class="home-hero-wrapper">
                    <div class="home-hero-avatar-container">
                        <img src="@/assets/images/avatar.svg" alt="">
                    </div>

                    <header class="home-hero-content">
                        <h1 class="home-hero-title page-title">
                            Hi, I'm Qamar Ali. <br> 
                            I'm A Full Stack Web Developer
                        </h1>
                        <p class="home-hero-subtitle">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione quasi ut error quas. Vero, nobis odit. Reiciendis ea delectus eius vitae, consequatur dignissimos sunt commodi doloremque, officia ad incidunt.
                        </p>
                    </header>
                </div>
            </div>
        </section>

        <section class="section things-ive-built-section">
            <div class="container-small">
                <header class="section-header">
                    <h2 class="section-title">
                        <span class="section-count">01.</span> Things I've Built
                    </h2>
                </header>
                <div class="section-content ">
                    <Project></Project>
                    <Project class="project-right"></Project>
                    <Project></Project>

                </div>
            </div>
        </section>

        <section class="  skills-section">
            <div class=" section skills-section-inner ">
                <div class="container-small">
                    <header class="section-header">
                        <h2 class="section-title">
                            <span class="section-count">02.</span> Skills
                        </h2>
                        <p class="section-subtitle">
                            There are countless technologies and frameworks that one can use as a Web Developer 
                            and i love learning and would love to learn them all, but if you want to master something
                            you cannot jump from one technology to another the next day. Mastering a technology requires time and practice 
                            and below are the technologies that i can proudly say <strong>i've mastered in my 7 year career (for future more is comming)</strong>. 
                            To simplify (Vue.js, Nuxt.js, Laravel, Node).
                        </p>
                    </header>
                </div>
            </div>
            <div class="container-big">
                <Skills></Skills>
            </div>
        </section>


    </main>
</template>
