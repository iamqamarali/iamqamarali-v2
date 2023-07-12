<script setup>

useHead({
    bodyAttrs: {
        class: 'has-fixed-header'
    },
})

useSeoMeta({
    title: "Qamar Ali - Articles",
    description: "Explore practical web development articles from my arsenal",
    robots: 'index, follow',
    ogTitle: "Qamar Ali | Full Stack Web Developer",
    ogDescription: "Explore practical web development articles from my arsenal",
    ogUrl: useAppConfig().APP_BASE_URL ,
    ogType: 'website',
})
useHead({
    link: [
        { rel: 'canonical', href: useAppConfig().APP_BASE_URL + useRoute().path }
    ]
})



const route = useRoute();

const page = useState(() => route.query.page ? parseInt(route.query.page) : 1)
const {data : articles } = await useFetch(`/api/posts`, {
    params:{
        page: page,
        published: true,
    }
})

onUpdated(() => {
    window.scrollTo({
        top: 50,
        behavior: 'smooth',
    })
    page.value = Number.parseInt(route.query.page) || 1
})

// change footer background color
const { footerStyles } = useFooter();
onMounted(()=>{
    page.value = 1;
    footerStyles.value = {
        background: '#e9c3b8',
    }
})
onBeforeUnmount(()=>{
    footerStyles.value = {}
})



</script>

<template>
    <main class="site-content">
        <hero-simple
            title="Explore Practical Software Development Articles."
            background="#e9c3b8"
            >
        </hero-simple>


        <section class="articles-section section" v-if="articles && articles.length">
            <div class="container">
                <!-- <header class="section-header section-header-small">
                    <h1 class="page-title">Explore Practical Software Development Articles.</h1>
                </header> -->

                <div class="three-columns-grid articles-grid">
                    <Article-link
                        v-for="article in articles" 
                        :key="article.id"
                        :article="article" 
                    />
                </div>

                
                <div  class="buttons-group float-right">
                    <NuxtLink 
                        :to="page > 1 ? '/articles?page=' + (page - 1) : ''" 
                        class="button button-black" >
                        Previous
                    </NuxtLink>
                    <NuxtLink 
                        :to="'/articles?page=' + (page + 1)" 
                        class="button button-black" >
                        Next
                    </NuxtLink>
                </div>
                <div class="clear-both"></div>
                

            </div>
        </section>

        <section class="section " v-else>
            <div class="container">
                <div class="section-header">
                    <div class="section-title">No More Articles</div>
                </div>
            </div>
        </section>

    </main>


</template>
