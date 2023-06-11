
export const useAuth = () => {
    
    const user = useState('user', () => null)
    const router = useRouter()

    const check = async () => {
        if(user.value ){
            return true
        }
        let {data, error} = await useFetch('/api/user')

        if(data.value && data.value.user){
            user.value = data.value.user
            return true
        }
        
        user.value = null
        return false
    }

    /**
     * 
     * Signin
     */
    const signin = async ({email, password}) => {
        const res =  await $fetch('/api/auth/signin', {
            method: 'POST',
            body: {
                email,
                password
            }
        })    
        if(res.success){
            user.value = res.user
            router.push('/admin/dashboard')
        }
        return res
    }

    /**
     * 
     * Signout
     */
    const signout = async () => {
        const res =  await $fetch('/api/auth/signout')
        if(res.success){
            user.value = null
            router.push('/')
        }    
        return res        
    }


    return {
        user,
        check,
        signout,
        signin
    }
}