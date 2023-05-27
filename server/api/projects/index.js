import Project from '../../models/Project'

export default defineEventHandler(async (event) => {
    let { page, limit } = getQuery(event)
    page = parseInt(page) || 1
    page--

    if(!limit || isNaN(limit)){
        limit = parseInt(limit) || 10
    }else{
        limit = parseInt(limit)
    }

    const projects = await Project.latest(page * limit, limit)
    return  projects.map(project => project.except([]))
})