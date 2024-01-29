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
  modules: ["@unocss/nuxt", "@nuxtjs/supabase"],
  plugins: [
    { mode: "client", src: "~/plugins/toast" },
    { mode: "client", src: "~/plugins/flutterwave" },
  ],
  runtimeConfig: {
    public: {
      frontendBaseUrl:
        process.env.NODE_ENV === "production"
          ? "https://audiophile-dev.vercel.app"
          : "http://localhost:3000",
      flutterwave_public_key: process.env.NUXT_FLUTTERWAVE_PUBLIC_KEY,
    },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**",
    ],
  },
  supabase: {
    redirect: false,
  },
});
