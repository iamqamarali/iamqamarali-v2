export default () => {

    const getUploadUrl = async(file, fileName) => {
        const data = await $fetch('/api/backblaze/getUploadUrl', {
            method: 'POST',
            body: {
                fileName: fileName,
                contentType: file.type,
            },
        });

        return data;
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
                'Authorization': data.authorizationToken,
                'X-Bz-File-Name': data.fileName,
                'Content-Type': file.type ,
                'Content-Length' : file.size + 40,
                'X-Bz-Content-Sha1' : sha1,
            }
        })

        return {
            fileId: response.fileId,
            fileName: response.fileName,
            fileUrl: data.fileUrl,
            
            message:  "File uploaded successfully"
        }
    }


    /**
     * 
     * remove File from backblaze
     */
    const deleteFile = async ({fileId, fileName})=>{
        return await $fetch('/api/backblaze/deleteFile', {
            method: 'POST',
            body: {fileId, fileName},
        });
    }


    return {
        getUploadUrl,
        uploadFile,
        deleteFile 
    }

}