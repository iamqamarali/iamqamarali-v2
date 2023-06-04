import Contact from '../../../models/Contact.js'

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }

    let id = parseInt(event.context.params.id)

    const contact = await Contact.find(id)
    return contact.except([])

})