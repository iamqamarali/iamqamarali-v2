import JWT from 'jsonwebtoken'
import User from '../models/User'

const config = {
    cookie_name : 'user_cookie',
    cookie_max_age : 3 * 24 * 60 * 60, // 3 days      
    jwt_secret_key :  process.env.JWT_SECRET_KEY,
}
 

export const auth = {

    config : config,
    user : null,


    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    verifyToken : function(token){
        return JWT.verify(token, config.jwt_secret_key)
    },

    /**
     * 
     */
    getUser : async function(decodedToken){
        this.user = await User.find(decodedToken.user_id)
        return this.user
    },


    /**
     * verify if user is logged in
     * @param {*} req 
     * @param {*} res 
     * @returns Boolean
     */
    check : async function(event){

        if(event.context.user){
            return event.context.user
        }

        // get token from cookies
        let token = getCookie(event, config.cookie_name)

        if(!token){
            return false;
        }

        let decodedToken = null;
        try{
            decodedToken = this.verifyToken(token)
            let user = await this.getUser(decodedToken)
            if(user){

                // add user to global response variables
                return event.context.user = user                
            }
        }catch(err){
            // if token is invalid just return false
        }

        return false;
    },

    /**
     * 
     * 
     */
    createToken : function(user){
        let payload = {
            user_id : user.get('id')
        }

        let token = JWT.sign(payload, config.jwt_secret_key , { 
            expiresIn :  config.cookie_max_age
        })

        return token 
    },


    /**
     * 
     * Give the User a Login Cookie
     */
    login(user, event){
        let token = this.createToken(user)

        // set cookie
        setCookie(event, config.cookie_name , token, { maxAge: config.cookie_max_age } )

        this.user = event.context.user = user
    
        return true
    },

    /**
     * remove Login Cookie
     */
    logout(event){
        deleteCookie(event, config.cookie_name)

        this.user = event.context.user = null
        
        return true;
    }

}

