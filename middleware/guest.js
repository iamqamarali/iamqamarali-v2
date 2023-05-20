export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuth()
  
    if(await auth.check()){
        throw createError({
            statusCode : 403 ,
            statusMessage: 'Please signout to access this resource'
        })
    }

});