import { link } from "fs";

export default defineNuxtConfig({
    css: ['~/assets/scss/app.scss'],
    app:{
        pageTransition: { name: 'page', mode: 'out-in' },            
        head:{
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
            ]
        }

    },


    runtimeConfig:{
        
    }
})
