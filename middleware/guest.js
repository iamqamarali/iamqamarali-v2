export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuth()
  
    const check = await auth.check()
    if(check){
        throw createError({
            statusCode : 403 ,
            statusMessage: 'Please signout to access this resource'
        })
    }

});