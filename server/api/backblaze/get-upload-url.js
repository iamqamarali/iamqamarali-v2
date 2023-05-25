import B2 from 'backblaze-b2';

export default defineEventHandler(async (event)=>{
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }

    // get data from request body
    let {  fileName, contentType } = await readBody(event)

    // create a new B2 instance
    const b2 = new B2({
        applicationKeyId: process.env.BLACK_BLAZE_KEY_ID,
        applicationKey: process.env.BLACK_BLAZE_APPLICATION_KEY
    });

    // authorize with B2
    await b2.authorize(); 

    const options = {
        bucketId:  process.env.BUCKET_ID,
        fileName: fileName,
        contentType: contentType,        
    };
    
    // get the url
    const res = await b2.getUploadUrl(options);

    
    return { 
        authorizationToken: res.data.authorizationToken,
        uploadUrl: res.data.uploadUrl, 
        fileName: fileName,
        fileFullPath: process.env.BLACK_BLAZE_BASE_URL + '/' + fileName,
    };

})