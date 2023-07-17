<script setup>

const { footerStyles, showAnimation, showContact } = useFooter();


</script>

<template>
    <footer class="site-footer" :style="footerStyles" >
        <RisingSquares  v-if="showAnimation"></RisingSquares>

        <section class="footer-contact-section" v-if="showContact">
            <div class="container">
                <div class="footer-contact-inner">
                    <h3 class="start-a-project ">Start a project</h3>
                    <p>Interested in working together? Feel free to email me at <a href="mailto:hello@qamarali.space" class="email text-body font-weight-semi-bold ">hello@qamarali.space</a> </p>
                    <NuxtLink to="/contact" class="button button-lg button-filled  cto-button  ">Let's do this</NuxtLink>
                </div>
            </div>
        </section>
        
        <div class="container ">
            <div class="logo-container">
                <NuxtLink to="/" class="logo ">
                    <logo></logo>
                </NuxtLink>

            </div>
        </div>
        <div class="container">
            <div class="footer-inner-wrapper">
                <div class="quote">
                    Living, learning, & leveling up one day at a time.
                </div>
                <nav class="footer-nav nav">
                    <a href="https://github.com/iamqamarali" target="_blank" class="nav-item">Github</a>
                    <a href="https://www.linkedin.com/in/iamqamarali/" target="_blank" class="nav-item">LinkedIn</a>
                    <NuxtLink to="/articles" class="nav-item">Articles</NuxtLink>
                    <NuxtLink to="/work" class="nav-item">Work</NuxtLink>
                    <NuxtLink to="/contact" class="nav-item">Contact</NuxtLink>
                </nav>
                <div class="footer-copyright">
                    <span>Handcrafter by me &copy; {{ new Date().getFullYear() }} Qamar Ali Media Inc. </span> 
                    <span class="made-width">Made with Nuxt 3</span>
                </div>
            </div>
        </div> 
    </footer>
</template>


