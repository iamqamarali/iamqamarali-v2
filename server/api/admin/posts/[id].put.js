import Post from '../../../models/Post.js'

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }

    // get the post
    const { id } = event.context.params;
    const post = await Post.find(Number.parseInt(id), [
        'id', 'published', 'slug',
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

    // if post is already published then disallow changing slug
    if(post.get('published')){
        delete body.slug
    }

    // save post
    post.fill(body)
    await post.save();

    
    return {
        message: 'Post updated successfully',
        post: post.data
    }

})