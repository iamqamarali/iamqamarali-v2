
export default defineEventHandler((event) => {
    if(!event.context.user)
        throw createError({
            statusCode: 401,
            statusMessage: 'You are not authorized to access this resource'
        });


    auth.logout(event)

    return {
        success: 'you are successfully signed out'
    }
})