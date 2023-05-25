<script setup>
import B2 from 'backblaze-b2'

// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
}) 


const content = `
            <h2>
                Hi there,
            </h2>
            <p>
                this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
            </p>
            <ul>
                <li>
                That’s a bullet list with one …
                </li>
                <li>
                … or two list items.
                </li>
            </ul>
            <p>
                Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
            </p>
            <pre><code class="language-css">body {
            display: none;
            }</code></pre>
            <p>
                I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
            </p>
            <blockquote>
                Wow, that’s amazing. Good work, boy! 👏
                <br />
                — Mom
            </blockquote>
        `;


const { uploadFile } = useBackBlaze();

// stores the image file
let image = null
let mainImageBlog = ref(null); // for previewing image
function onImageChange(e){
    image = e.target.files[0]
    // reader
    const reader = new FileReader()
    reader.onload = (e) => {
        mainImageBlog.value = e.target.result
    }
    reader.readAsDataURL(image)
}


let form = reactive({
    title: "default title",
    description: "",
    body: content,
    featured: false,
    slug : '',
});

// when form is submitted
const submitForm = async () => {
    form.slug = toSlug(form.title)

    try{
        const { post } = await $fetch('/api/admin/posts', {
            method: 'POST',
            body: toRaw(form)
        })

        // upload image
        const fileExtension = image.name.split('.').pop()
    
        const fname = `${form.slug}_${Date.now()}_${Math.random()*10}.${fileExtension}`
        const fileFullName = `${post.id}/${fname}`;
        
        const { fileFullPath, message } = await uploadFile(image, fileFullName)
        
        console.log(fileFullPath);
        // update post with image 
        const res = await $fetch(`/api/admin/posts/${post.id}`, {
            method: 'PUT',
            body: { main_image: fileFullPath }
        })        
        console.log(res)

    }catch(e){
        console.error(e)
        console.log(e.response)
    }
}
        

</script>

<template>
    <main class="create-posts-page">

        <section class="section">
            <div class="container">
                
                <h1 class="section-title">Create Post</h1>

                <form class="form-container">
                    <div class="left">

                        <div class="input-group">
                            <input type="text" class="mb-5" v-model="form.title"  placeholder="Post Title" />
                            <div class="m5-10">
                                <span class="mr-5 ml-5 ">Slug: </span> {{ toSlug(form.title) }}
                            </div>

                        </div>

                        <div class="input-group">
                            <input type="text" v-model="form.description" placeholder="Description" />
                        </div>

                        <h3 >Post Body</h3>
                        <Tiptap v-model="form.body" /> 

                    </div>
                    <div class="right">
                        <div class="input-group">
                            <label for="">Post Main Image</label>
                            <img :src="mainImageBlog" class="mt-10 mb-10" v-if="mainImageBlog" alt="">
                            <input type="file" @change="onImageChange" />
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
                        <div class="input-group">
                            <button class="button-filled" @click.prevent="submitForm">Publish</button>
                        </div>

                    </div>

                </form>
                
            </div>        
        </section>

    </main>

    
</template>
