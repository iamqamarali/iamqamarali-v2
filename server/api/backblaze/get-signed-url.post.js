

export default defineEventHandler(async (event)=>{
    if(!event.context.user){
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not authorized to access this resource'
        });        
    }

    let { post_id, post_slug, file_name, content_type } = await readBody(event)

    const file_extension = file_name.split('.').pop()

    aws.config.update({
        accessKeyId: process.env.BLACK_BLAZE_KEY_ID,
        secretAccessKey: process.env.BLACK_BLAZE_APPLICATION_KEY,        
    });

    const s3 = new aws.S3({
        endpoint: process.env.BLACK_BLAZE_ENDPOINT,
        region: process.env.BLACK_BLAZE_REGION,
    });

    const myBucket = process.env.BUCKET_NAME
    const fileName = `${post_slug}_${Date.now()}_${Math.random()}.${file_extension}`
    const signedUrlExpireSeconds = 60 * 5 // 5 minutes

    const path = `post_id/${fileName}`;

    console.log(path)

    try{
        const url = s3.getSignedUrl('putObject', {
            Bucket: myBucket,
            Key: path,
            Expires: signedUrlExpireSeconds,
        })

        return { signedUrl : url }
    }catch(error){
        return { error }
    }


})