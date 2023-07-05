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
                            As a web developer, I have encountered countless technologies and frameworks that are available to us. I believe in staying at the forefront of technological advancements and continuously exploring bleeding-edge tools. However, I also recognize that true mastery cannot be achieved by hopping from one technology to another overnight. It requires dedicated time and consistent practice.
                        </p>
                        <p>
                            Throughout my seven-year career, I have invested considerable effort into mastering several key technologies. I take great pride in my expertise in the following technologies: <b>(Vue.js, Nuxt.js, Laravel, Node).</b>
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
                                        <!-- "Elevate your digital presence and bring your vision to life with my cutting-edge front-end skills." -->
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
                                        <!-- "I harness the power of backend technologies to build scalable foundations 
                                        and complex backend systems that power your digital ambitions." -->
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
                                        <!-- "Like a conductor guiding an orchestra, my deployment skills orchestrate seamless transitions, deploying web applications with precision and minimal downtime." -->
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


