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
    const toggleSkin = () => {
        skin.value = skin.value == 'skin-light' ? 'skin-dark' : 'skin-light'
        console.log(skin.value)
    }
    return {
        skin,
        setSkin,
        toggleSkin
    }
}