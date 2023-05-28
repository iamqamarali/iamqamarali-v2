import Post from '../../models/Post'

export default defineEventHandler(async (event) => {
    let { page, limit, published } = getQuery(event)
    page = parseInt(page) || 1
    page--

    if(!limit || isNaN(limit)){
        limit = parseInt(limit) || 10
    }else{
        limit = parseInt(limit)
    }

    let queryParams = { is_project: false }
    if(published){
        queryParams.published = true
    }

    const posts = await Post.latest(page * limit, limit, queryParams)
    return  posts.map(post => post.except([]))
})