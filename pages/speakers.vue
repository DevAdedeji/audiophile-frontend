<template>
  <main>
    <div class="bg-black w-full py-15 lg:py-30">
      <h1
        class="text-white uppercase text-7 lg:text-10 text-center tracking-wider"
      >
        Speakers
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
    name: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688648202/audiophile/products/yzqbg76hc1earixs1sbn.webp",
    isNew: true,
    category: "speakers",
    slug: "zx9-speaker",
    price: 4500,
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
  },
  {
    name: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688648202/audiophile/products/iiidlu5qfewan64jw3fa.webp",
    isNew: false,
    category: "speakers",
    slug: "zx7-speaker",
    price: 3500,
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
  },
]);
</script>

<style scoped>
.product-image {
  filter: drop-shadow(0px 49px 19px #cab7b7);
}
</style>
