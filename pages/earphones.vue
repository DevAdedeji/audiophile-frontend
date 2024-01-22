<template>
  <main>
    <div class="bg-black w-full py-15 lg:py-30">
      <h1
        class="text-white uppercase text-7 lg:text-10 text-center tracking-wider"
      >
        earphones
      </h1>
    </div>
    <section class="py-30 w-90% mx-auto max-wid">
      <div class="flex flex-col gap-20">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="flex flex-col lg:flex-row items-center gap-20"
        >
          <div
            class="w-full lg:w-1/2 flex flex-col gap-8 md:px-8"
            :class="
              index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
            "
          >
            <p
              v-if="product.isNew"
              class="text-orange uppercase tracking-10px text-3.5 text-center lg:text-left"
            >
              New product
            </p>
            <h2 class="text-black text-10 font-700 text-center lg:text-left">
              {{ product.name }}
            </h2>
            <p
              class="text-4 text-black opacity-50 text-center lg:text-left"
              style="line-height: 25px"
            >
              {{ product.description }}
            </p>
            <CustomButton label="See product" class="mx-auto lg:mx-0" />
          </div>
          <div
            class="w-full lg:w-1/2 flex items-center justify-center"
            :class="
              index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
            "
          >
            <div
              class="w-540px h-300px md:h-352px md:h-560px flex items-center justify-center bg-grey rounded-md"
            >
              <img
                :src="product.image"
                class="object-contain h-200px w-200px md:w-250px md:h-250px product-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <QuickLinks />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "products",
});
const products = ref([
  {
    name: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688648497/audiophile/products/b9uswnre2wymtjiexpcb.webp",
    isNew: true,
    category: "earphones",
    slug: "yx1-earphones",
    price: 599,
    features:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    includes: [
      {
        quantity: 2,
        item: "Earphone unit",
      },
      {
        quantity: 6,
        item: "Multi-size earplugs",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "USB-C charging cable",
      },
      {
        quantity: 1,
        item: "Travel pouch",
      },
    ],
    others: [
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image:
          "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688646361/audiophile/products/hjqrx9siy155rteimdtd.webp",
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image:
          "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688646359/audiophile/products/jo1lt9wmmmjjrjcclnpi.webp",
      },
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image:
          "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688648202/audiophile/products/yzqbg76hc1earixs1sbn.webp",
      },
    ],
    gallery: [
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688716076/audiophile/products/yx1/ze4uwxhwtpe8cznvtt5k.webp",
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688716075/audiophile/products/yx1/rsaz39ugu4a6o6bdsmz1.webp",
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688716076/audiophile/products/yx1/zdicyhbc21bf6x6thkhc.webp",
    ],
  },
]);
</script>

<style scoped>
.product-image {
  filter: drop-shadow(0px 49px 19px #cab7b7);
}
</style>
