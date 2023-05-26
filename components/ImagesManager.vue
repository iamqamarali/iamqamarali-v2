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
const emit = defineEmits(['fileUploaded', 'fileRemoved'])


const allImages = ref(props.images)

/**
 * Upload Images
 */
const uploadImage = async (image) => {
    
    const { uploadFile } = useBackBlaze();

    const fileExtension = image.name.split('.').pop()

    const fname = `${Date.now()}_${Math.random()*10}.${fileExtension}`
    const fileFullName = `${props.uploadUrlPrefix}_${fname}`;

    const { fileFullPath, fileName, message } = await uploadFile(image, fileFullName)

    if (fileFullPath) {
        allImages.value.push(fileFullPath)
    }
    emit('fileUploaded', {
        fileFullPath,
        fileName,
    })
}


// when image input value is changed
const onImageChange = () => {
    const files = event.target.files || event.dataTransfer.files;
    if (!files.length)
        return;

    Array.from(files).forEach(file => {
        uploadImage(file);
    })
}


</script>

<template>
    <div class="images-manager">        
        <slot name="title" />

        <div class="images-container" v-if="allImages.length">
            <div class="images-manager-image" v-for="(image, index) in allImages" :key="index">
                <img :src="image" alt="">

                <button class="close-button">&times;</button>
                <input type="text" class="image-url-input" :value="image">
            </div>
        </div>
        
        <div class="input-group">
            <input type="file" multiple @change="onImageChange" />
        </div>
    </div>
</template>

