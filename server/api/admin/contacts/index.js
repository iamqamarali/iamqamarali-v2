import Contact from '../../../models/Contact.js'

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }


    let { page, limit } = getQuery(event)
    page = parseInt(page) || 1
    page--

    if(!limit || isNaN(limit)){
        limit = parseInt(limit) || 10
    }else{
        limit = parseInt(limit)
    }

    const contacts = await Contact.latest(page * limit, limit)
    return  contacts.map(c => c.except([]))
})