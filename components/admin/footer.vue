<template>
    <footer class="site-footer" >
        
        <section class="footer-contact-section">
            <div class="container">
                <div class="footer-contact-inner">
                    <h3 class="start-a-project">Start a project</h3>
                    <p>Interested in working together? Feel free to email me at <a href="mailto:get@qamarali.space" class="email font-weight-semi-bold ">Get@qamarali.space</a> </p>
                    <button class="button button-lg  cto-button ">Let's do this</button>
                </div>
            </div>
        </section>
        <div class="container ">
            <div class="logo-container">
                <logo></logo>
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
                    <a href="https://codepen.io/iamqamarali" target="_blank" class="nav-item">CodePen</a>                    
                    <NuxtLink to="/articles" class="nav-item">Articles</NuxtLink>
                    <a href="" class="nav-item">Work</a>
                </nav>
                <div class="footer-copyright">
                    <span>Handcrafter by me &copy; {{ new Date().getFullYear() }} Qamar Ali Media Inc. </span> 
                    <span class="made-width">Made with Nuxt 3</span>
                </div>
            </div>
        </div> 
    </footer>
</template>


