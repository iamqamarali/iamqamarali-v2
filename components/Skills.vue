<script setup>


</script>

<template>
    <section class="section skills-section  ">
        <div class="container-small">
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
                            There are countless technologies and frameworks that one can use as a Web Developer 
                            and i always try to stay on the bleeding-edge technologies, but to master something
                            you cannot jump from one technology to another the next day. Mastering a technology requires time and practice 
                            and below are the technologies that i can proudly say <strong>i've mastered in my 7 year career.</strong>
                            To simplify (Vue.js, Nuxt.js, Laravel, Node).
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
                                        "Elevate your digital presence and bring your vision to life with my cutting-edge front-end skills."
                                    </p>
                                    <div class="skills-list">
                                        <span class="tag">JavaScript (ES6)</span>
                                        <span class="tag">Vue 3</span>
                                        <span class="tag">CSS3</span>
                                        <span class="tag">Scss</span>
                                        <span class="tag">Bootstrap</span>
                                        <span class="tag">Bulma</span>
                                        <span class="tag">AnimeJS</span>
                                        <span class="tag">Webpack</span>
                                    </div>
                                </section>
                                <section class="main-skill tab-content" :class="{'active': activeTab == 1}">
                                    <h5 class="main-skill-title mt-0">Back-End Development</h5>
                                    <p class="main-skill-description">
                                        "I harness the power of backend technologies to build scalable foundations 
                                        and complex backend systems that power your digital ambitions."
                                    </p>
                                    <div class="skills-list">
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
                                        "Like a conductor guiding an orchestra, my deployment skills orchestrate seamless transitions, deploying web applications with precision and minimal downtime."
                                    </p>
                                    <div class="skills-list">
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


