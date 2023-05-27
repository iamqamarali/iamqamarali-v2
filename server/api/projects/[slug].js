import Project from '../../models/Project'

export default defineEventHandler(async (event) => {
    const {slug} = event.context.params
    const project = await Project.find({
        slug : slug
    })
    return project ? project.except([]) : null
})