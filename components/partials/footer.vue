<template>
    <footer class="site-footer" >
        <div class="container">
            <div class="footer-inner-wrapper">
                <div class="findme-elsewhere">
                    Find me elsewhere on the web as well:
                </div>
                <nav class="footer-nav nav">
                    <a href="https://github.com/iamqamarali" target="_blank" class="nav-item">Github</a>
                    <a href="https://www.linkedin.com/in/iamqamarali/" target="_blank" class="nav-item">LinkedIn</a>
                    <a href="https://codepen.io/iamqamarali" target="_blank" class="nav-item">CodePen</a>                    
                    <NuxtLink to="/articles" class="nav-item">Articles</NuxtLink>
                    <a href="" class="nav-item">Work</a>
                </nav>
                <div class="footer-copyright">
                    <span>&copy; {{ new Date().getFullYear() }}</span> Qamar Ali Media Inc.
                </div>
            </div>
        </div> 
    </footer>
</template>


