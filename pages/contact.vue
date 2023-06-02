<script setup>

useHead({
    bodyAttrs: {
        class: 'has-fixed-header'
    },
})


</script>

<template>
    <main class="site-content contact-page" >
        <hero-simple
            title="Get In Touch."
            background="#d6dabf"
            description="My inbox is always open for new opportunities,
                                If you have a project that you want to get started, 
                                think you need my help with something or just fancy saying hey, 
                                then feel free to get in touch, I will try my best to get back to you ASAP!"
            >
        </hero-simple>

        <section class="section">
            <div class="container-small">
                <div class="section-content mt-25">
                    <div class="two-columns-grid">

                        <form  class="contact-form">
                            <div class="input-group">
                                <input type="text" class="input" placeholder="Name">
                            </div>
                            <div class="input-group">
                                <input type="text" class="input" placeholder="Email">
                            </div>
                            <div class="input-group">
                                <textarea name="Message" class="textarea" rows="6" placeholder="Message"></textarea>
                            </div>
                            <div class="input-group">
                                <button class="button button-lg button-black">Send Message</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>

    </main>
</template>
