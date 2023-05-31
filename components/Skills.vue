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
            <header class="">
                <h2 class="section-title title-dashed">
                    <span>
                        <span class="section-count">02.</span> Skills
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
                
                <div class="skills">
                    <section class="main-skill " >
                        <h5 class="main-skill-title">Font-End Development</h5>
                        <p class="main-skill-description">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <ul class="sub-skills-list">
                            <li>JavaScript (ES6)</li>
                            <li>Vue.js</li>
                            <li>CSS3</li>
                            <li>Nuxt 3</li>
                            <li>Bootstrap</li>
                            <li>Bulma</li>
                            <li>Webpack</li>
                        </ul>
                    </section>
                    <section class="main-skill ">
                        <h5 class="main-skill-title">Back-End Development</h5>
                        <p class="main-skill-description">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <ul class="sub-skills-list">
                            <li>JavaScript (ES6)</li>
                            <li>Vue.js</li>
                            <li>CSS3</li>
                            <li>Nuxt 3</li>
                            <li>Bootstrap</li>
                            <li>Bulma</li>
                            <li>Webpack</li> 
                            <li>Node.js</li>
                            <li>ExpressJS</li>
                            <li>Laravel</li>
                            <li>PHP</li>
                        </ul>
                    </section>
                    <section class="main-skill ">
                        <h5 class="main-skill-title">Deployment & Maintainance </h5>
                        <p class="main-skill-description">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <ul class="sub-skills-list">
                            <li>JavaScript (ES6)</li>
                            <li>Vue.js</li>
                            <li>CSS3</li>
                            <li>Nuxt 3</li>
                            <li>Bootstrap</li>
                            <li>Bulma</li>
                            <li>Webpack</li>
                        </ul>
                    </section>
                </div>

            </div>
        </div>
    </section>
</template>


