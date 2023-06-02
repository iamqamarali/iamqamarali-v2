import Contact from '../../models/Contact.js';
import { make } from 'simple-body-validator';


export default defineEventHandler(async event => {
    const body = await readBody(event)

    const validator = make(body, {
        name: 'required|string',
        email: 'required|email',
        message: 'required|string',
    })

    if(!validator.validate()){
        setResponseStatus(event, 422);

        return {
            errors: validator.errors().all()
        }
    }



    const contact = new Contact({
        name: body.name,
        email: body.email,
        message: body.message
    })
    await contact.save()
    
    return {
        success : "Your Message has been sent!",
        contact: contact.data
    }
})