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
                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Caafinancial.
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
                    <Project class="project-right"></Project>

                </div>
            </div>
        </section>


        <section class=" skills-section">
            <div class="skills-section-inner section">
                <div class="container-small">
                    <header class="section-header">
                        <h2 class="section-title">
                            <span class="section-count">02.</span> Skills
                        </h2>
                        <p class="section-subtitle">
                            For the past 7 years i've learned a lot of things and i'm still learning new things everyday.
                            I use modern technologies to create beautiful and responsive websites, web apps and mobile apps.
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
