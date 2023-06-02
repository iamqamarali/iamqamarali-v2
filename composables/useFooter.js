export default () => {
    const footerStyles = useState(()=> { return { } }) 
    const showAnimation = useState(() => true)


    return {
        footerStyles,
        showAnimation
    }
}