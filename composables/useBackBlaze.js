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

    /**
    * uploads file through signed url
     */
    const uploadFile = async (file, fileName)=>{
        if (!file) {
            console.error('No image selected.');
            return;
        }

        // get the signed URL from api
        const data = await getUploadUrl(file, fileName)

        // create SHA1 hash of file
        const buffer = await file.arrayBuffer()
        const hash = await crypto.subtle.digest('SHA-1', buffer)
        const sha1 = Array.from(new Uint8Array(hash))
            .map(v => v.toString(16).padStart(2, '0'))
            .join('');


        // upload file to back blazesigned url
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
            fileName: data.fileName,
            fileFullPath: data.fileFullPath,
            message:  "File uploaded successfully"
        }
    }


    return {
        getUploadUrl,
        uploadFile,
    }

}