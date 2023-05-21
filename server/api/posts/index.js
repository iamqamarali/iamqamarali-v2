import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    let { page, limit } = getQuery(event)
    page = parseInt(page) || 1
    page--

    let queryLimit = limit
    if(!limit){
        queryLimit = parseInt(limit) || 10
    }

    const posts = await Post.latest(page * queryLimit, queryLimit)
    return  posts.map(post => post.except([]))
})