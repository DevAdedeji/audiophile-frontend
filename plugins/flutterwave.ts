import Flutterwave from "flutterwave-vue3";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Flutterwave, {});
});
