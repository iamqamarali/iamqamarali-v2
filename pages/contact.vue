<script setup>

useHead({
    bodyAttrs: {
        class: 'has-fixed-header'
    },
})

useSeoMeta({
    title: "Qamar Ali - Contact",
    description: "I'm a computer scientist and I empower businesses to revolutionize their digital presence with scalable, cutting-edge full-stack web applications and SaaS products that scale to millions of users.",
    robots: 'index, follow',
    ogTitle: "Qamar Ali | Full Stack Web Developer",
    ogDescription: "My inbox is always open for new opportunities, If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then feel free to get in touch, I will try my best to get back to you ASAP.",
    ogUrl: useAppConfig().APP_BASE_URL ,
    ogType: 'website',
})
useHead({
    link: [
        { rel: 'canonical', href: useAppConfig().APP_BASE_URL + useRoute().path }
    ]
})



const form = reactive({
    name: '',
    email: '',
    message: '',
})
const errors = ref([])
const showSuccessMessage = useState(() => false)

const sendMessage = async () => {
    errors.value = []

    $fetch('/api/contact', {
        method: 'POST',
        body: form,
    })
    .then((res) =>{
        if(res.success){
            form.name = ''
            form.email = ''
            form.message = ''
            setTimeout(()=>{
                showSuccessMessage.value = true

            }, 500)
        }

    }).catch(err => {
        console.error(err.response)
        errors.value = Object.values(err.response._data.errors).map(val => val[0])
    })
}




// change footer background color
const { footerStyles, showAnimation, showContact } = useFooter();
onMounted(()=>{
    showSuccessMessage.value = false
    footerStyles.value = {
        background: '#d6dabf',
    }
    showContact.value = false
})
onBeforeUnmount(()=>{
    footerStyles.value = {}
    showContact.value = true
})


</script>

<template>
    <main class="site-content contact-page" >
        <hero-simple
            title="Get In Touch."
            background="#d6dabf"
            >
        </hero-simple>

        <section class="section">
            <div class="container-small">
                <div class="section-content ">

                    <div class="message message-success" v-if="showSuccessMessage">
                        <div class="message-body">
                            <p>Thank you for your message, I will get back to you soon!</p>
                        </div>
                    </div>


                    <div class="two-columns-grid">
                        <div>
                            <h4 class="mt-0">Get@qamarali.space</h4>
                            <p>
                                My inbox is always open for new opportunities,
                                If you have a project that you want to get started, 
                                think you need my help with something or just fancy saying hey, 
                                then feel free to get in touch, I will try my best to get back to you ASAP!
                            </p>
                        </div>

                        <form  class="contact-form">
                            <PartialsErrors :errors="errors"></PartialsErrors>


                            <div class="input-group">
                                <input type="text" class="input" v-model="form.name" placeholder="Name">
                            </div>
                            <div class="input-group">
                                <input type="text" class="input" v-model="form.email" placeholder="Email">
                            </div>
                            <div class="input-group">
                                <textarea name="Message" class="textarea" v-model="form.message" rows="6" placeholder="Message"></textarea>
                            </div>
                            <div class="input-group">
                                <button @click.prevent="sendMessage" class="button button-lg button-black">Send Message</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </section>

    </main>

</template>
