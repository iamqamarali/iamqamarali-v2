


export default (options = {}) => {
    const initialPageLoaderDuration = ref(1000)

    // for animations that  first happens after page load
    const initialPageLoadDelay = useState('initial-page-load-delay', () => 900)
    // for animations that  happen after page change
    const pageChangeDelay = ref(600);
    // delay between each staggered animation
    const staggerDelay = ref(options.stagger? options.stagger: 150)

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
    const stagger = (index, addPageChangeDelay) => {
        return initialPageLoadDelay.value 
                + (staggerDelay.value * index) 
                + (addPageChangeDelay ? pageChangeDelay.value : 0)
    }
    

    /**
     * create fade slide up animation
     */
    const createFadeSlideUp = (el, ops = { staggerIndex : 1 } , animation = {}, conf = {}) => {
        // if ops is number
        if(typeof ops == 'number'){
            ops = { staggerIndex : ops }
        }
        
        return el.animate({
            opacity: [0, 1],
            transform: ['translateY(100px)', 'translateY(0px)'],
            ...animation
        }, 
        {
            duration: 1400,
            easing: easings.easeOut,
            fill: 'forwards',
            delay: stagger(ops.staggerIndex, ops.addPageChangeDelay),
            ...conf
        })
    }

    /**
     * create fade slide up animation
     */
    const createFadeSlideDown = (el, ops = { staggerIndex : 1 } , animation = {}, conf = {}) => {
        // if ops is number
        if(typeof ops == 'number'){
            ops = { staggerIndex : ops }
        }

        return el.animate({
            opacity: [0, 1],
            transform: ['translateY(-100px)', 'translateY(0px)'],
            ...animation
        }, 
        {
            duration: 1400,
            easing: easings.easeOut,
            fill: 'forwards',
            delay: stagger(ops.staggerIndex, ops.addPageChangeDelay),
            ...conf
        })
    }


    return {
        initialPageLoaderDuration,
        initialPageLoadDelay,
        pageChangeDelay,
        
        easings,
        staggerDelay,
        stagger,

        createFadeSlideUp,
        createFadeSlideDown
    }
}