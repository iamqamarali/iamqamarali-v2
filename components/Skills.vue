<script setup>


</script>

<template>
    <section class="section skills-section  ">
        <div class="container">
            <div class="section-content">
                

                <div class="two-colums-grid">
                    <div>
                        <header class="">
                            <h2 class="section-title title-dashed">
                                <span>
                                    <span class="section-count">03.</span> My Skills
                                </span>
                            </h2>
                        </header>
                        <p>
                            As a seasoned web developer, I have encountered countless technologies and frameworks that are available to us.
                            I believe in staying at the forefront of technological advancements and continuously exploring cutting-edge technologies. 
                            However, I also recognize that true mastery cannot be achieved by hopping from one technology to another every other night. 
                            It requires dedicated time, consistancy and a lot of development experience to master a technology, and I can proudly say that throughout my seven-year career i've mastered the following technologies (Vue.js, Nuxt.js, Laravel, Node).
                        </p>
                    </div>

                    <div class="skills">
                        <Tabs
                            :tabs="[
                                'Font-End Development',
                                'Back-End Development',
                                'Deployment & Other'
                            ]"
                            vertical="true">
                            <template #content="{ activeTab }">
                                <section class="main-skill tab-content" :class="{'active': activeTab == 0}" >
                                    <h5 class="main-skill-title mt-0">Font-End Development</h5>
                                    <p class="main-skill-description">
                                        Transform your digital vision into reality with my front-end expertise, delivering sleek and responsive designs that enhance user engagement and drive exceptional online experiences.
                                    </p>
                                    <div class="skills-list tags">
                                        <span class="tag">Vue 3</span>
                                        <span class="tag">CSS3</span>
                                        <span class="tag">JavaScript (ES6)</span>
                                        <span class="tag">Scss</span>
                                        <span class="tag">Bootstrap</span>
                                        <span class="tag">Bulma.css</span>
                                        <span class="tag">Animate.css</span>
                                        <span class="tag">AnimeJS</span>
                                        <span class="tag">Webpack</span>
                                    </div>
                                </section>
                                <section class="main-skill tab-content" :class="{'active': activeTab == 1}">
                                    <h5 class="main-skill-title mt-0">Back-End Development</h5>
                                    <p class="main-skill-description">
                                        Empower your digital infrastructure with my back-end expertise, building robust and scalable systems that ensure data integrity, efficient functionality, and seamless integration for your business.
                                    </p>
                                    <div class="skills-list tags">
                                        <span class="tag">Node</span>
                                        <span class="tag">Nuxt 3</span>
                                        <span class="tag">Express</span>
                                        <span class="tag">Laravel</span>
                                        <span class="tag">PHP</span>
                                        <span class="tag">MySQL</span>
                                        <span class="tag">MongoDB</span>
                                        <span class="tag">Redis</span>
                                        <span class="tag">Websockets</span>
                                        <span class="tag">Cloud Functions</span>
                                        <span class="tag">Restful API</span>
                                    </div>
                                </section>
                                <section class="main-skill tab-content" :class="{'active': activeTab == 2}">
                                    <h5 class="main-skill-title mt-0">Deployment & Other </h5>
                                    <p class="main-skill-description">
                                        Simplify your software deployment process and ensure a successful launch with my expert guidance, meticulous attention to detail, and dedication to smooth implementation.
                                    </p>
                                    <div class="skills-list tags">
                                        <span class="tag">Git</span>
                                        <span class="tag">Docker</span>
                                        <span class="tag">Google Cloud Platform (GCP)</span>
                                        <span class="tag">Netlify</span>
                                        <span class="tag">Vercel</span>
                                        <span class="tag">Github</span>
                                        <span class="tag">CICD</span>
                                        <span class="tag">Linux</span>
                                    </div>
                                </section>
                            </template>
                        </Tabs>
                    </div>


                </div>
                

            </div>
        </div>
    </section>
</template>


