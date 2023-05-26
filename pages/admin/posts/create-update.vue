<script setup>
import B2 from 'backblaze-b2'

// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

const route = useRoute();
const post = useState(() => { return {} })
// fetch post data if post id is provided

if(route.query.post){
    const { data } = await useFetch(`/api/admin/posts/`+ route.query.post)
    if(!data.value){
        throw createError({ statusCode: 404, statusMessage: "Post not found" });
    }
    post.value = data.value
}

let form = reactive({
    title: post.value.title || '',
    description: post.value.description || '' ,
    body: post.value.body || '',
    featured: (post.value.featured ? true : false),
    slug : post.value.slug || '',
    main_image: post.value.main_image || '',
});

watchEffect(()=>{
    form.slug = toSlug(form.title)
})


const {getPost, createPost, updatePost, publishPost} = usePosts();


const publish = async () => {
    try{
        const data = await updatePost(post.value.id, form)
        console.log(data);
        post.value = {
            ...post.value,
            ...data.post
        };
        await publishPost(post.value.id)
        post.value.published = true;
    }catch(err) {  console.error(err.response) }

}


// when form is submitted
const createOrUpdatePost = async () => {
    try{
        // create post
        if(!post.value.id){
            const data = await createPost(form)
            post.value = {
                ...post.value,
                ...data.post
            };
            
            const router = useRouter();
            router.push({ query: { post: post.value.id } })

            console.log(post.value)
            return 
        }
        // update post
        const data = await updatePost(post.value.id, form);
        post.value = {
            ...post.value,
            ...data.post
        };
        console.log(post.value)

    }catch(err) {  console.error(err.response) }

}

const onFileUploaded = () => {

}


// when they leave page
onUnmounted(()=>{
    post.value = {}
})
onMounted(async ()=>{
    if(route.query.post && !post.value.id){
        const data = await getPost(route.query.post)
        if(!data){
            throw createError({ statusCode: 404, statusMessage: "Post not found" });
        }
        post.value = data
        form = reactive({
            title: post.value.title || '',
            description: post.value.description || '' ,
            body: post.value.body || '',
            featured: (post.value.featured ? true : false),
            slug : post.value.slug || '',
            main_image: post.value.main_image || '',
        });
    }
})



</script>

<template>
    <main class="create-posts-page">

        <section class="section">
            <div class="container">
                
                <h1 class="section-title">Create Post</h1>

                <div class="form-container">
                    <div class="left">

                        <div class="input-group">
                            <input type="text" class="mb-5" v-model="form.title"  placeholder="Post Title" />
                            <div class="m5-10">
                                <span class="mr-5 ml-5 ">Slug: </span> {{ post.published ? post.slug : form.slug }}
                            </div>

                        </div>

                        <div class="input-group">
                            <input type="text" v-model="form.description" placeholder="Description" />
                        </div>

                        <h3 >Post Body</h3>
                        <Tiptap v-model="form.body" /> 

                        <!--  images -->
                        <ImagesManager v-if="post.id"
                            :uploadUrlPrefix="`${post.id}/${post.slug}`"
                            :fileUploaded="onFileUploaded"
                            >
                            <template #title>
                                <label>Post Images</label>
                            </template>
                        </ImagesManager>


                    </div>
                    <div class="right">
                        <div class="input-group">
                            <label for="">Post Main Image</label>
                            <input type="text" v-model="form.main_image" placeholder="Main image url" />
                        </div>
                        <br>
                        <div class="input-group ">
                            <label for="">Featured</label>
                            <div class="toggle-switch float-right">
                                <input type="checkbox" v-model="form.featured" id="featured-1">
                                <label for="featured-1"></label>
                            </div>
                            <div class="clear-both"></div>
                        </div>
                        <div class=" input-group">
                            <button class="button-filled button-sm " @click.prevent="createOrUpdatePost">{{ post.id ? 'Update' : "Create" }}</button>
                            <button class=" button-sm float-right" :disabled="!post.id || post.published" @click="publish">Publish</button>
                        </div>

                    </div>

                </div>
                
            </div>        
        </section>

    </main>

    
</template>
