
export default defineEventHandler((event) => {
    if(!event.context.user)
        return { error: 'You Are Not Signed In' }


    auth.logout(event)

    return {
        success: 'you are successfully signed out'
    }
})