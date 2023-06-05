<script setup>

const props = defineProps({
    images: {
        type: Array,
        default: () => []
    },
    uploadUrlPrefix:{
        type: String,
        default: ''
    }
})
const emit = defineEmits(['fileUploaded', 'fileDeleted'])


const { uploadFile, deleteFile } = useBackBlaze();
const allImages = ref(props.images ? props.images : [])


/**
 * Upload Images
 */
const uploadImage = async (image) => {
    
    const fileExtension = image.name.split('.').pop()

    const fname = `${Date.now()}_${Math.random()*10}.${fileExtension}`
    const fileFullName = `${props.uploadUrlPrefix}_${fname}`;
    
    uploadFile(image, fileFullName)
    .then(imageData => {
        const imageObj = {
            id: imageData.fileId,
            name: imageData.fileName,
            url: imageData.fileUrl
        }
        
        if (imageData.fileUrl) {
            allImages.value.push(imageObj)
        }
        emit('fileUploaded', imageObj)

    }).catch((err) => console.error(err.response))

}

/**
 * Remove Image
 */
const removeImage = async function(image, index){
    deleteFile({
        fileId: image.id,
        fileName: image.name
    }).then(() => {
        emit('fileDeleted', image)
        allImages.value.splice(index, 1)
    }).catch((err) => console.error(err.response))
}


// when image input value is changed
const onImageChange = (e) => {
    const files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;

    Array.from(files).forEach((file, index) => {
        setTimeout(() => {
            uploadImage(file)
        }, 200 * index);
    })
    e.target.value = "";
}


</script>

<template>
    <div class="images-manager">        
        <slot name="title" />

        <div class="images-container" v-if="allImages.length">
            <div class="images-manager-image" v-for="(image, index) in allImages" :key="index">
                <img :src="image.url" alt="">

                <button class="close-button" @click="removeImage(image, index)">&times;</button>
                <input type="text" class="image-url-input" :value="image.url">
            </div>
        </div>
        
        <div class="input-group">
            <input type="file" multiple @change="onImageChange" />
        </div>
    </div>
</template>

