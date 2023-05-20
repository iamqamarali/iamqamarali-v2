import User from '../../models/User' 
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
    if(event.context.user){
        return { error: 'You are already loggedIn' }
    }

    const {email, password} = await readBody(event);
    const user = await User.find({email})

    // check if user exists
    if(!user) 
        return { error: 'Invalid email' }

    // check if password is correct
    if( !bcrypt.compareSync(password, user.get('password')) ){
        return { error: 'Invalid password' }
    }

    auth.login(user, event)

    return {
        success: 'you are successfully loggedIn',
        user : user.except(user.hidden)
    }
})