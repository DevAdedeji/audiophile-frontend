// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  theme: {
    colors: {
      orange: "#D87D4A",
      lightOrange: "#fbaf85",
      white: "#FFFFFF",
      black: "#000000",
      lightBlack: "#191919",
      dark: "#101010",
      grey: "#F1F1F1",
      lightGrey: "#FAFAFA",
      danger: "#CD2C2C",
    },
    breakpoints: {
      sm: "320px",
      md: "640px",
      lg: "960px",
      xl: "1024px",
      xxl: "1280px",
    },
  },
});
