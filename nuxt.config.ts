import { link } from "fs";

export default defineNuxtConfig({
    css: ['~/assets/scss/app.scss', 'prismjs/themes/prism-tomorrow.min.css'],
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
