import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    const {slug} = event.context.params
    const post = await Post.find({
        slug : slug
    })
    return  post.except([])
})