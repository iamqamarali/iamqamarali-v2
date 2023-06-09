import Post from '../../../models/Post.js'
import { make } from 'simple-body-validator';

export default defineEventHandler(async (event) => {
    if(!event.context.user){
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }
    }


    // get the body from event
    const body = await readBody(event);

    // create validator with rules
    const validator = make(body, {
        title: 'required|string',
        description: 'required|string',
        //body: 'required|string',
        slug: 'required|string',
        featured: 'required|boolean',
    })

    // if validation fails send error back with 422 status
    if(!validator.validate()){
        setResponseStatus(event, 422);

        return {
            errors: validator.errors().all()
        }
    }

    // if everything is good then save the post

    const post = new Post({
        title: body.title,
        description: body.description,
        body:  body.body,
        slug: body.slug,
        featured: body.featured,
        user_id : auth.user.get('id'),
        images: JSON.stringify([]),
    })

    await post.save();

    return {
        message: 'Post created successfully',
        post: post.except([])
    }

})