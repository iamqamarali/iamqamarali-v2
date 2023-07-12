


export default (options = {}) => {
    const initialPageLoaderDuration = ref(1000)
    const initialPageLoadDelay = useState('initial-page-load-delay', () => 1400)
    
    // stagger
    const staggerDelay = ref(options.stagger? options.stagger: 200)
    const stagger = (index) => {
        return initialPageLoadDelay.value + (staggerDelay.value * index)
    }


    const easings = reactive({
        easeOut : 'cubic-bezier(0.17,0.84,0.44,1)',
        easeInOut: 'cubic-bezier( 0.81, 0.10, 0.16, 0.9 )',
    })
    const animations = reactive({    
        slideUp: {
            opacity: [0, 1],
            transform: ['translateY(130px)', 'translateY(0px)']
        },
        slideUpConfig: {
            duration: 1400,
            easing: easings.easeOut,
            fill: 'forwards',
            delay: initialPageLoadDelay.value
        }    
    })
 
       
    const initialPageLoad = useState('initial-page-load')
    watch(initialPageLoad, (value) => {
        if(value == false){
            initialPageLoadDelay.value = 0;
        }
    })

    return {
        initialPageLoaderDuration,
        initialPageLoadDelay,

        easings,
        animations,
        staggerDelay,
        stagger,
    }
}