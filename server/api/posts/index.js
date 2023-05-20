import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    let { page } = getQuery(event)
    page = parseInt(page) || 1
    page--
    let limit = 10
    const posts = await Post.latest(page * limit, limit)
    return  posts.map(post => post.except([]))
})