


export default (options = {}) => {
    const initialPageLoaderDuration = ref(1000)

    // for animations that that first happens after page load
    const initialPageLoadDelay = useState('initial-page-load-delay', () => 1400)

    /**
     * change initial page load delay to 0 after first page is loaded
     *  so that next time animations will start immediately
     */
    const initialPageLoad = useState('initial-page-load')
    watch(initialPageLoad, (value) => {
        if(value == false){
            initialPageLoadDelay.value = 0;
        }
    })

    
    const easings = reactive({
        easeOut : 'cubic-bezier(0.17,0.84,0.44,1)',
        easeInOut: 'cubic-bezier( 0.81, 0.10, 0.16, 0.9 )',
    }) 
       


    // stagger
    const staggerDelay = ref(options.stagger? options.stagger: 150)
    const stagger = (index) => {
        return initialPageLoadDelay.value + (staggerDelay.value * index)
    }
    

    /**
     * create fade slide up animation
     */
    const createFadeSlideUp = (el,index = 0, ops, conf = {}) => {
        return el.animate({
            opacity: [0, 1],
            transform: ['translateY(100px)', 'translateY(0px)'],
            ...ops
        }, 
        {
            duration: 1400,
            easing: easings.easeOut,
            fill: 'forwards',
            delay: stagger(index),
            ...conf
        })
    }

    /**
     * create fade slide up animation
     */
    const createFadeSlideDown = (el,index = 0, ops = {}, conf = {}) => {
        return el.animate({
            opacity: [0, 1],
            transform: ['translateY(-100px)', 'translateY(0px)'],
            ...ops
        }, 
        {
            duration: 1400,
            easing: easings.easeOut,
            fill: 'forwards',
            delay: stagger(index),
            ...conf
        })
    }


    return {
        initialPageLoaderDuration,
        initialPageLoadDelay,

        easings,
        staggerDelay,
        stagger,

        createFadeSlideUp,
        createFadeSlideDown
    }
}