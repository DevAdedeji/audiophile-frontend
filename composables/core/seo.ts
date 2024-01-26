export const useCustomHead = (title: string, desc: string, img: string) => {
  useHead({
    title: title
      ? `${title} - Audiophile`
      : "Audiophile - Your Premier Audio Equipment Destination",
    meta: [
      {
        name: "description",
        content:
          desc ?? "Create and managge your business smoothly with Taaskly",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@devadedeji" },
      {
        name: "twitter:title",
        content:
          title ?? "Audiophile - Your Premier Audio Equipment Destination",
      },
      {
        name: "twitter:description",
        content:
          desc ??
          "Audiophile: Discover the ultimate collection of audio devices tailored for audiophiles. Audiophile brings you a curated selection of high-fidelity headphones, speakers, turntables, and more. Experience the perfect blend of quality and acoustic excellence. Order now and immerse yourself in the sound.",
      },
      {
        name: "twitter:image",
        content: img ?? "https://www.taaskly.site/og.png",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          title ?? "Audiophile - Your Premier Audio Equipment Destination",
      },
      { property: "og:url", content: "https://audiophile-dev.vercel.app/" },
      {
        property: "og:image",
        content:
          img ??
          "https://drive.google.com/uc?id=1X8wfg7s47wjafKA_LoixBzkJnu1_XPEc",
      },
      {
        property: "og:image:secure_url",
        content:
          img ??
          "https://drive.google.com/uc?id=1X8wfg7s47wjafKA_LoixBzkJnu1_XPEc",
      },
      { property: "og:image:type", content: "image/*" },
      {
        property: "og:description",
        content:
          desc ??
          "Audiophile: Discover the ultimate collection of audio devices tailored for audiophiles. Audiophile brings you a curated selection of high-fidelity headphones, speakers, turntables, and more. Experience the perfect blend of quality and acoustic excellence. Order now and immerse yourself in the sound.",
      },
    ],
  });
};
