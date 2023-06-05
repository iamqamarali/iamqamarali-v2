import B2 from 'backblaze-b2';

export default defineEventHandler(async (event)=>{
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }

    // create a new B2 instance
    const b2 = new B2({
        applicationKeyId: process.env.BACK_BLAZE_KEY_ID,
        applicationKey: process.env.BACK_BLAZE_APPLICATION_KEY
    });

    // authorize with B2
    await b2.authorize(); 

    // get data from request body
    let { fileId, fileName } = await readBody(event)

    
    const res = await b2.deleteFileVersion({
        fileId: fileId,
        fileName: fileName
    });

    return { message : "File removed successfully" };

})