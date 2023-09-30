// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
],
image: {
  inject: true,
  quality: 80,
  format: ['webp','webp', 'jpeg' , 'jpg' , 'png'],
  screens: {
    'xs': 320,
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    'xxl': 1536,
    '2xl': 1536
  },
},
app:{
  head:{
    script:[
      {
        src:"https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js",
      },
      {
        src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
      }
    ]
  }
}
})
