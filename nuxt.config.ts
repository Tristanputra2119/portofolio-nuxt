// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Daftarkan modul di sini
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxt/content'
  ],

  // CSS Global
  css: ['~/assets/css/main.css'],

  // App configuration
  app: {
    head: {
      title: 'Tristan Putra - Web Developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Web Developer based in Denpasar, Indonesia. Passionate about creating beautiful, accessible, and user-friendly websites.' },
        { name: 'keywords', content: 'web developer, frontend, backend, nuxt, vue, react, indonesia, denpasar' },
        { name: 'author', content: 'Tristan Putra' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tristan Putra - Web Developer' },
        { property: 'og:description', content: 'Web Developer based in Denpasar, Indonesia. Passionate about creating beautiful, accessible, and user-friendly websites.' },
        { property: 'og:site_name', content: 'Tristan Putra Portfolio' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tristan Putra - Web Developer' },
        { name: 'twitter:description', content: 'Web Developer based in Denpasar, Indonesia. Passionate about creating beautiful, accessible, and user-friendly websites.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap' },
      ],
    },
  },
})
