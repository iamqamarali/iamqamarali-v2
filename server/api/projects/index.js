import Project from '../../models/Project'

export default defineEventHandler(async (event) => {
    let { page, limit , published, featured} = getQuery(event)
    page = parseInt(page) || 1
    page--

    // get limit or set default
    if(!limit || isNaN(limit)){
        limit = parseInt(limit) || 10
    }else{
        limit = parseInt(limit)
    }

    // filter results
    let queryParams = { is_project: true }
    if(published){
        queryParams.published = true
    }
    if(featured){
        queryParams.featured = true
    }


    const projects = await Project.latest(page * limit, limit, queryParams)
    return  projects.map(project => project.data)
})