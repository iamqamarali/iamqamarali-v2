import B2 from 'backblaze-b2';

export default defineEventHandler(async (event)=>{
    if(!event.context.user){
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not authorized to access this resource'
        });        
    }

    // get data from request body
    let { post_id, post_slug, file_name, content_type } = await readBody(event)

    const file_extension = file_name.split('.').pop()

    // create a new B2 instance
    const b2 = new B2({
        applicationKeyId: process.env.BLACK_BLAZE_KEY_ID,
        applicationKey: process.env.BLACK_BLAZE_APPLICATION_KEY
    });

    // authorize with B2
    await b2.authorize(); 

    const fileName = `${post_slug}_${Date.now()}.${file_extension}`
    const full_path = `${post_id}/${fileName}`;

    const options = {
        bucketId:  process.env.BUCKET_ID,
        fileName: full_path,
        contentType: content_type,

        'Access-Control-Allow-Origin': '*',
        
        'X-Bz-Content-Sha1': 'do_not_verify',
    };
    
    const res = await b2.getUploadUrl(options);

    return { 
        authorizationToken: res.data.authorizationToken,
        uploadUrl: res.data.uploadUrl, 
        path: full_path
    };

})