// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Audiophile",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "Audiophile",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Audiophile",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Audiophile",
        },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content:
        //     "https://drive.google.com/uc?id=1AN1U9YUx1PQfTjvee5HrEsmZskoEFsm5",
        // },
      ],
    },
  },
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
