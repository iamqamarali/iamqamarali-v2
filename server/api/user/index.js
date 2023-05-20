export default defineEventHandler((event) => {
    let user = event.context.user
    if(!user){
        throw createError(401, 'Unauthorized')
    }
    
    return {
        user : user.except(user.hidden) 
    };
})