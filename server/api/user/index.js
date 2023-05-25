export default defineEventHandler((event) => {
    let user = event.context.user
    if(!user){
        setResponseStatus(event , 401)
        return {
            error : 'You are not Authorized'
        }
    }
    
    return {
        user : user.except(user.hidden) 
    };
})