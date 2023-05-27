import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    const {slug} = event.context.params
    const post = await Post.find({
        slug : slug,
        is_project: false
    })
    return  post.except([])
})