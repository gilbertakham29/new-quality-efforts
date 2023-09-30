// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
],
image: {
  inject: true
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
