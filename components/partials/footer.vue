<template>
    <footer class="site-footer " style="background-image:url('/images/sides-waves.svg')"  >
        <div class="container">
            <section class="footer-contact-section">
                <h3 class="section-title">Contact</h3>
                <p> Have a project for me? Shoot me a email at  <a href="mailto:iamqamarali1@gmail.com" class="email ">iamqamarali1@gmail.com</a> </p>
            </section>
            <section class="footer-bottom">
                <div class="footer-bottom-copy">
                    <span>&copy; {{ new Date().getFullYear() }}</span> Qamar Ali
                </div>
                <div class="footer-nav nav">
                    <a href="https://github.com/iamqamarali" target="_blank" class="nav-item">Github</a>
                    <a href="https://www.linkedin.com/in/iamqamarali/" target="_blank" class="nav-item">LinkedIn</a>
                    <a href="" class="nav-item">Work</a>
                    <NuxtLink to="/articles" class="nav-item">Articles</NuxtLink>
                </div>
            </section>
        </div>
    </footer>
</template>

