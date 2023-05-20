export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuth()

    let check = await auth.check()
    if(!check){
        throw createError({
            statusCode : 401 ,
            statusMessage: 'You are not Authorized'
        })
    }
    
});