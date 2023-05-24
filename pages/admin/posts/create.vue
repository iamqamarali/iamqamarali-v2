<script setup>
import B2 from 'backblaze-b2'

// define page meta data
definePageMeta({
    middleware: 'auth',
    layout: 'admin',
}) 



/**
 * uploads file through signed url
 */
const uploadFile = async (file)=>{

    if (!file) {
        console.error('No image selected.');
        return;
    }

    try {
        const data = await $fetch('/api/backblaze/get-upload-url', {
            method: 'POST',
            body: {
                file_name: file.name,
                content_type: file.type,

                post_id: 1,
                post_slug: 'test-post',
            },
        });
        console.log(data)

        //const sha1 = await file.arrayBuffer().then(buffer => crypto.subtle.digest('SHA-1', buffer)).then(hash => hex(hash));
        //var sha1 = crypto.createHash('sha1').update(source).digest("hex");

        //console.log(sha1);

        const uploadResponse = await $fetch(data.uploadUrl, {
            method: 'POST',
            body: file,

            headers: {
                Authorization: data.authorizationToken,
                'X-Bz-File-Name': data.path,
                'Content-Type': file.type,
                'Content-Length' : file.size,
            }

        })

        console.log(uploadResponse);

        // const b2 = new B2({
        //     applicationKeyId: '0053084658a37890000000003',
        //     applicationKey: 'K005AM9hIHVB4LoUAJxNnIc5YctqTys',

        // })
        // let res= await b2.uploadFile({
        //     uploadUrl: data.uploadUrl,
        //     uploadAuthToken: data.authorizationToken,
        //     fileName: data.path,
        //     contentLength: file.size, // optional data length, will default to data.byteLength or data.length if not provided
        //     mime: file.type, // optional mime type, will default to 'b2/x-auto' if not provided
        //     data: file, // this is expecting a Buffer, not an encoded string
        //     hash: 'sha1-hash', // optional data hash, will use sha1(data) if not provided
        //     onUploadProgress: (event) => {} // progress monitoring
        // })

        console.log(res);


        if (uploadResponse.ok) {
            console.log('Image uploaded successfully.');
        } else {
            console.error('Image upload failed.');
        }
    } catch (error) {
        console.error('Request failed:', error);
    }
}


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

let form = reactive({
    title: "",
    description: "",
    body: content,
    featured: false,
    slug : '',
});

// stores the image file
let image = null
function onImageChange(e){
    image = e.target.files[0]
}


// when form is submitted
const submitForm = async () => {
    form.slug = toSlug(form.title)

    try{
        // const res = await $fetch('/api/admin/posts', {
        //     method: 'POST',
        //     body: toRaw(form)
        // })
        // console.log(res)

        // upload image
        uploadFile(image)

    }catch(e){
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
