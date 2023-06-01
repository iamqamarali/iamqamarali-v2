export default defineNuxtRouteMiddleware((to, from) => {
    const getDepth = (path) => {
        return path.split('/').filter(seg => seg.length> 0 ).length
    }

    const toDepth = getDepth(to.path)
    const fromDepth = getDepth(from.path)

    // if (toDepth > fromDepth) {
    //     to.meta.transitionName = 'slide-left'
    //     from.meta.pageTransition = 'slide-right'
    // } else if (toDepth < fromDepth) {
    //     to.meta.transitionName = 'slide-right'
    //     from.meta.pageTransition = 'slide-left'
    // }

})