import Post from '../../../models/Post.js'

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }

    // get the post
    const { id } = event.context.params;
    const post = await Post.find(Number.parseInt(id));

    // if not found throw error
    if(!post){
        throw createError({
            statusCode: 404,
            statusMessage: 'Post not found',
        })
    }


    return post.data

})