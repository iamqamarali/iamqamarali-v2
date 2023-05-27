<script setup>
import B2 from 'backblaze-b2'
import Post from '~/server/models/Post';

// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
})

const route = useRoute();
const post = useState(() => { return {} })

// fetch INITIAL post data if post id is provided
const { data } = await useFetch(()=>`/api/admin/posts/`+ route.query.post)
if(!data.value && route.query.post){
    throw createError({ statusCode: 404, statusMessage: "Post not found" });
}
post.value = data.value ? data.value : {};

let form = reactive({
    title: post.value.title || '',
    description: post.value.description || '' ,
    body: post.value.body || '',
    slug : post.value.slug || '',
    main_image: post.value.main_image || '',
    featured: (post.value.featured ? true : false),
    is_project: (post.value.is_project ? true : false),
});

// update slug when title changes
watchEffect(()=>{
    form.slug = toSlug(form.title)
})


/**
 * 
 * Post API Functions
 */
const {getPost, createPost, updatePost} = usePosts();

const publish = async () => {
    try{
        const data = await updatePost(post.value.id, {
            ...form,
            published: true
        })
        post.value = {
            ...post.value,
            ...data.post
        };

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

            return 
        }
        // update post
        const data = await updatePost(post.value.id, form);
        post.value = {
            ...post.value,
            ...data.post
        };
        console.log(post.value)
        alert(data.message)

    }catch(err) {  console.error(err.response) }

}

/**
 * when a file is uploaded
 */
const onImageUploaded = async ({ id, url, name }) => {
    updatePost(post.value.id, {
        add_image: true,
        image: { id, url, name }
    }).then(data => {
        post.value.images = data.post.images
    }).catch(err => console.error(e.response))
}

/**
 * when a file is deleted 
 */
const onImageDeleted = async (image) => {
    updatePost(post.value.id, {
        remove_image: true,
        image: image
    }).then(data => {
        console.log(data);
        post.value.images = data.post.images
    }).catch(err => console.error(e.response))
}

onUnmounted(()=>{
    post.value = {}
})


</script>

<template>
    <main class="create-posts-page">

        <section class="section">
            <div class="container">
                
                <h1 class="section-title">
                    {{ post.id ? 'Edit Post' : 'Create Post' }}
                </h1>

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
                            :images="JSON.parse(post.images)"
                            :uploadUrlPrefix="`${post.id}/${post.slug}`"
                            @fileUploaded="onImageUploaded"
                            @fileDeleted="onImageDeleted"
                            >
                            <template #title>
                                <label>Post Images</label>
                            </template>
                        </ImagesManager>


                    </div>
                    <div class="right">
                        <div class="input-group">
                            <NuxtLink class="button button-sm" :to="'/article/' + post.slug" target="_blank" >View Post</NuxtLink>
                        </div>
                        <br/>
                        
                        <div class="input-group ">
                            <label for="">Featured Post</label>
                            <div class="toggle-switch float-right">
                                <input type="checkbox" v-model="form.featured" id="featured-1">
                                <label for="featured-1"></label>
                            </div>
                            <div class="clear-both"></div>
                        </div>

                        <div class="input-group ">
                            <label for="">Is Project </label>
                            <div class="toggle-switch float-right">
                                <input type="checkbox" v-model="form.is_project" id="is_project">
                                <label for="is_project"></label>
                            </div>
                            <div class="clear-both"></div>
                        </div>

                        <div class="input-group">
                            <label for="">Post Main Image</label>
                            <input type="text" v-model="form.main_image" placeholder="Main image url" />
                        </div>
                        <br>

                        <div class=" input-group">
                            <button class="button button-filled button-sm " @click.prevent="createOrUpdatePost">{{ post.id ? 'Update' : "Create" }}</button>
                            <button class="button button-sm float-right" :disabled="!post.id || post.published" @click="publish">Publish</button>
                        </div>

                    </div>

                </div>
                
            </div>        
        </section>

    </main>

    
</template>