<script setup>
defineProps({
    activeSkill : {
        type: Number,
        required: true,
    }
})


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
                                    <span class="section-count">02.</span> Skills
                                </span>
                            </h2>
                        </header>
                        <p>
                            There are countless technologies and frameworks that one can use as a Web Developer 
                            and i love learning and would love to learn them all, but if you want to master something
                            you cannot jump from one technology to another the next day. Mastering a technology requires time and practice 
                            and below are the technologies that i can proudly say <strong>i've mastered in my 7 year career (for future more is comming)</strong>. 
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
                            <template #content="{ activeTab: activeSkill }">
                                <section class="main-skill tab-content" :class="{'active': activeSkill == 0}" >
                                    <h5 class="main-skill-title mt-0">Font-End Development</h5>
                                    <p class="main-skill-description">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>                                    
                                    <div class="skills-list">
                                        <span class="tag">JavaScript (ES6)</span>
                                        <span class="tag">Vue.js</span>
                                        <span class="tag">CSS3</span>
                                        <span class="tag">Bulma</span>
                                        <span class="tag">Webpack</span>
                                        <span class="tag">PHP</span>
                                        <span class="tag">Laravel</span>
                                        <span class="tag">Node.js</span>
                                    </div>
                                </section>
                                <section class="main-skill tab-content" :class="{'active': activeSkill == 1}">
                                    <h5 class="main-skill-title mt-0">Back-End Development</h5>
                                    <p class="main-skill-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus enim repellendus dolores placeat beatae. Voluptatum labore velit quam quaerat cum consectetur animi. Odio id itaque omnis deleniti impedit repellat et!.</p>
                                    <div class="skills-list">
                                        <span class="tag">JavaScript (ES6)</span>
                                        <span class="tag">Vue.js</span>
                                        <span class="tag">CSS3</span>
                                        <span class="tag">Nuxt 3</span>
                                        <span class="tag">Bootstrap</span>
                                    </div>
                                </section>
                                <section class="main-skill tab-content" :class="{'active': activeSkill == 2}">
                                    <h5 class="main-skill-title mt-0">Deployment & Other </h5>
                                    <p class="main-skill-description">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                                    <div class="skills-list">
                                        <span class="tag">JavaScript (ES6)</span>
                                        <span class="tag">Vue.js</span>
                                        <span class="tag">CSS3</span>
                                        <span class="tag">Nuxt 3</span>
                                        <span class="tag">Bootstrap</span>
                                        <span class="tag">Bulma</span>
                                        <span class="tag">Webpack</span>
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


