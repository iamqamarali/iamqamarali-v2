import Post from '../../../models/Post.js'

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }

    // get the post
    const { id } = event.context.params;
    const post = await Post.find(Number.parseInt(id), [
        'id', 'published', 'slug', 'images'
    ]);

    // if not found throw error
    if(!post){
        throw createError({
            statusCode: 404,
            statusMessage: 'Post not found',
        })
    }

    // get the body from event
    const body = await readBody(event);


    // parse the old images
    let oldImages = post.get('images')    
    if(typeof oldImages == 'string'){
        try{
            oldImages = JSON.parse(oldImages)                
        }catch(err){
            oldImages = []
        }
    }
    if(typeof oldImages != 'object'){
        oldImages = []
    }


    // add the image if this property is available
    if(body.add_image){
        
        const newImages = [
            ...oldImages,
            body.image
        ]
        post.set('images', JSON.stringify(newImages) )
    }
    else if(body.remove_image){

        const newImages = oldImages.filter(image => image.id !== body.image.id)
        post.set('images', JSON.stringify(newImages))
    }
    else{
        // if post is already published then disallow changing slug
        if(post.get('published')){
            delete body.slug
        }
        // save post
        post.fill(body)
    }


    await post.save();
    
    return {
        message: 'Post updated successfully',
        post: post.except([])
    }

})