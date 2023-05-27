<script setup>
// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

const articles = useState(() => [])

const page = useState(() => 1 )
const {data, error} = await useFetch(()=>{
    return '/api/posts?page=' + page.value + '&limit=20'
})


if(data.value){
    articles.value = [...data.value]
}
watch(data, ()=>{
    if(data.value){
        articles.value = [...articles.value, ...data.value]
    }
})



</script>

<template>
    <main class="posts-page">
        <section class="section">
            <div class="container">
                <header>
                    <h1 class="d-inline-block">Posts</h1>
                    <NuxtLink class="button float-right" to="/admin/posts/create-update">
                        Create New Post
                    </NuxtLink>
                </header>


                <table class="mt-75">
                    <thead>
                        <th>ID</th>
                        <th>Featured</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr v-for="article in articles">
                            <td>{{ article.id }}</td>
                            <td>{{ article.featured ? 'featured' : '' }}</td>
                            <td>{{ article.title }}</td>
                            <td>{{ article.description }}</td>
                            <td>
                                <div class="buttons-group">
                                    <NuxtLink :to="`/admin/posts/create-update?post=${article.id}`" class="button button-sm" >Edit</NuxtLink>
                                    <button @click="deletePost(article.id)" class="button button-sm">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button @click="page++" class="mt-75 float-right">Load More</button>
                <div class="clear-both"></div>

            </div>
        </section>

    </main>
</template>
