import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    let { page, limit } = getQuery(event)
    page = parseInt(page) || 1
    page--

    if(!limit || isNaN(limit)){
        limit = parseInt(limit) || 10
    }else{
        limit = parseInt(limit)
    }

    const posts = await Post.latest(page * queryLimit, queryLimit)
    return  posts.map(post => post.except([]))
})