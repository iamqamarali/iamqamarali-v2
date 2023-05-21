import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    let { page, limit } = getQuery(event)
    page = parseInt(page) || 1
    page--
    if(!limit){
        limit = 10
    }
    const posts = await Post.latest(page * limit, limit)
    return  posts.map(post => post.except([]))
})