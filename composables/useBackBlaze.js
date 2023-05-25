export default () => {

    const getUploadUrl = async(file, fileName) => {
        return await $fetch('/api/backblaze/get-upload-url', {
            method: 'POST',
            body: {
                fileName: fileName,
                contentType: file.type,
            },
        });
    }

    const getSha1 = async (file) => {
        // create sha1 of file
        const buffer = await file.arrayBuffer()
        const hash = await crypto.subtle.digest('SHA-1', buffer)
        const sha1 = Array.from(new Uint8Array(hash))
            .map(v => v.toString(16).padStart(2, '0'))
            .join('');

        return sha1;        
    }

    /**
    * uploads file through signed url
     */
    const uploadFile = async (file, fileName)=>{
        if (!file) {
            console.error('No image selected.');
            return;
        }

        // get the signed URL
        const data = await getUploadUrl(file, fileName)

        const sha1 = await getSha1(file);

        // upload file to signed url
        const response = await $fetch(data.uploadUrl, {
            method: 'POST',
            body: file,

            headers: {
                Authorization: data.authorizationToken,
                'X-Bz-File-Name': data.fileName,
                'Content-Type': file.type ,
                'Content-Length' : file.size + 40,
                'X-Bz-Content-Sha1' : sha1,
            }
        })

        return {
            ...data,
            message: 'File uploaded successfully.',
        }
    }


    return {
        getUploadUrl,
        getSha1,
        uploadFile,
    }

}