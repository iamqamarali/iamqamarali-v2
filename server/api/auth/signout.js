
export default defineEventHandler((event) => {
    if(!event.context.user)
        setResponseStatus(event , 401)
        return { error : 'You are not authorized to access this resource' }

    auth.logout(event)

    return {
        success: 'you are successfully signed out'
    }
})