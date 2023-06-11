
export default () => {
    const footerStyles = useState(()=> { return { } }) 
    const showAnimation = useState(() => true)
    const showContact = useState(() => true)
    
    return {
        footerStyles,
        showAnimation,
        showContact
    }
}