


export default (options = {}) => {
    const initialPageLoaderDuration = ref(1500)
    const initialPageLoadDelay = useState('initial-page-load-delay', () => 1100)
    
    // stagger
    const staggerDelay = ref(options.stagger? options.stagger: 200)
    const stagger = (index) => {
        return initialPageLoadDelay.value + (staggerDelay.value * index)
    }


    const easings = reactive({
        easeOut : 'cubic-bezier(0.17,0.84,0.44,1)',
    })
    const animations = reactive({    
        slideUp: {
            opacity: [0, 1],
            transform: ['translateY(100px)', 'translateY(0px)']
        },
        slideUpConfig: {
            duration: 1700,
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