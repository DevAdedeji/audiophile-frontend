// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["/assets/css/main.css"],
  modules: ["@unocss/nuxt", "@nuxt/image", "@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
  image: {
    dir: "assets",
    screens: {
      sm: 320,
      md: 640,
      lg: 960,
      xl: 1024,
      xxl: 1280,
    },
  },
});
