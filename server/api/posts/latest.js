import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    const posts = await Post.latest(0, 8)
    return  posts.map(post => post.except([]))
})