
export default () => {
    const skin = useState('skin', () => 'skin-light')
    
    const setSkin = (newSkin) => {
        if(newSkin == 'light')
            skin.value = 'skin-light'
        else if(newSkin == 'dark')
            skin.value = 'skin-dark'
        else
            skin.value = 'skin-light'
    }

    // toggle skin
    const toggleSkin = () => {
        skin.value = skin.value == 'skin-light' ? 'skin-dark' : 'skin-light'
    }

    // computed property to check if skin is light
    const isLight = computed(() => skin.value == 'skin-light')

    // watch skin value and store it in local storage
    watch(skin, (newVal, oldVal) => {
        localStorage.setItem('skin', newVal)
    })

    // on mounted, get skin from local storage
    onMounted(()=>{
        let s = localStorage.getItem('skin')
        if(s){
            skin.value = s
        }
    })



    return {
        skin,
        setSkin,
        toggleSkin,
        isLight
    }
}