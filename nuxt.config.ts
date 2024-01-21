// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Audiophile - Your Premier Audio Equipment Destination",
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
          content:
            "Audiophile: Discover the ultimate collection of audio devices tailored for audiophiles. Audiophile brings you a curated selection of high-fidelity headphones, speakers, turntables, and more. Experience the perfect blend of quality and acoustic excellence. Order now and immerse yourself in the sound.",
        },
        { name: "format-detection", content: "telephone=no" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Audiophile - Your Premier Audio Equipment Destination",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Audiophile: Discover the ultimate collection of audio devices tailored for audiophiles. Audiophile brings you a curated selection of high-fidelity headphones, speakers, turntables, and more. Experience the perfect blend of quality and acoustic excellence. Order now and immerse yourself in the sound.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://drive.google.com/uc?id=1X8wfg7s47wjafKA_LoixBzkJnu1_XPEc",
        },
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
