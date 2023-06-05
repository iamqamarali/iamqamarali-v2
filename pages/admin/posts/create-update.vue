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
const isProjectPage = useState(() => route.query.project ? true : false)

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
    tags: post.value.tags || '',
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
        // update if we're on project page
        isProjectPage.value = post.value.is_project


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
        console.log("image uploaded to database", data)
        post.value.images = data.post.images
    }).catch(err => console.error(err.response))
}

/**
 * when a file is deleted 
 */
const onImageDeleted = async (image) => {
    updatePost(post.value.id, {
        remove_image: true,
        image: image
    }).then(data => {
        console.log("file deleted from database", data);
        post.value.images = data.post.images
    }).catch(err => console.error(err.response))
}

/**
 * getImages
 */
function getImages(post){
    if(typeof post.images == 'object'){
        return post.images
    }
    else if(typeof post.images == 'string'){
        try{
            let imgs= JSON.parse(post.images)
            return imgs
        }catch(err){
            return []
        }
    }
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
                    <template v-if="isProjectPage">
                        {{ post.id ? 'Edit Project' : 'Create Project' }}
                    </template>
                    <template v-else>
                        {{ post.id ? 'Edit Post' : 'Create Post' }}
                    </template>
                </h1>

                <div class="form-container">
                    <div class="left">

                        <div class="input-group">
                            <input type="text"  class=" input mb-5" v-model="form.title"  placeholder="Post Title" />
                            <div class="m5-10">
                                <span class="mr-5 ml-5 ">Slug: </span> {{ post.published ? post.slug : form.slug }}
                            </div>

                        </div>

                        <div class="input-group">
                            <input type="text" class="input" v-model="form.description" placeholder="Description" />
                        </div>

                        <h3 >Post Body</h3>
                        <Tiptap v-model="form.body" /> 

                        <!--  images -->
                        <ImagesManager v-if="post.id"
                            :images="getImages(post)"
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
                        <div class="input-group" v-if="post.id">
                            <NuxtLink class="button button-sm" v-if="isProjectPage" :to="'/work/' + post.slug" target="_blank" >View Project</NuxtLink>
                            <NuxtLink class="button button-sm" v-else :to="'/article/' + post.slug" target="_blank" >View Post</NuxtLink>
                        </div>
                        <br/>
                        
                        <div class="input-group ">
                            <label for="">Featured </label>
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
                            <label for=""> 
                                {{ isProjectPage ? 'Project' : 'Post'  }} Main Image
                            </label>
                            <input type="text" class="input" v-model="form.main_image" placeholder="Main image url" />
                        </div>
                        <br>
                        <div class="input-group">
                            <label for=""> 
                                Tags <small>(comma separated)</small>
                            </label>
                            <input type="text" class="input" v-model="form.tags" placeholder="Tags" />
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
