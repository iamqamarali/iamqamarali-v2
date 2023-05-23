<template>
    <footer class="site-footer" >
        <div class="container">
            <section class="footer-inner-wrapper">
                <div class="footer-copyright">
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


