export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuth()

    let check = await auth.check()
    if(!check){

        return navigateTo('/auth/signin');

        // throw createError({
        //     statusCode : 401 ,
        //     statusMessage: 'You are not Authorized'
        // })
    }
    
});