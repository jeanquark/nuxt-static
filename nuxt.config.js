const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-static/'
  }
} : {}


export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            'nuxt-i18n',
            {
                locales: [
                    {
                        code: 'en',
                        iso: 'en-US',
                        name: 'English',
                        // langFile: 'en-US.json'
                        file: 'en-US.json'
                    },
                    {
                        code: 'fr',
                        iso: 'fr-FR',
                        name: 'Français',
                        // langFile: 'fr-FR.json'
                        file: 'fr-FR.json'
                    },
                    {
                        code: 'de',
                        iso: 'de-DE',
                        name: 'Deutsch',
                        // langFile: 'de-DE.json'
                        file: 'de-DE.json'
                    }
                ],
                parsePages: false,
                lazy: true,
                langDir: 'lang/',
                defaultLocale: 'en',
                seo: false
            }
        ],
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    auth: {
        strategies: {
            auth0: {
                domain: 'dev-b36ddgyg.eu.auth0.com',
                client_id: '3r3I79dZFCvhG9izQhRK2ZjgxhxxS6J0'
                //   audience: 'http://localhost:3000',
                //   redirectUrl: 'http://localhost:3000/callback'
            }
        },
        // redirect: {
        	// login: '/login',
        	// logout: '/logout',
        	// home: '/app',
        	// callback: '/login'
        // },
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    ...routerBase
}
