import Post from '../../../models/Post.js'

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }

    const { id } = await readBody(event);
    const post = await Post.find(Number.parseInt(id), ['id']);

    post.fill({ published: true })
    await post.save();

    return {
        message: 'Post published successfully',
        post: post.except([])
    }

})