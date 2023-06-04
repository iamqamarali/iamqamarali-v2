import Contact from '../../../models/Contact.js'

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }
    let id = parseInt(event.context.params.id)
    const { is_read } = await readBody(event)

    const contact = await Contact.find(id)

    if(!contact)
        return { error : 'Contact not found' }

    contact.set('is_read', is_read )
    contact.save();


    return contact.except([])

})