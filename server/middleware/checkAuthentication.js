
export default defineEventHandler(async (event) => {

    let user = await auth.check(event)
    event.context.user = user;

})
