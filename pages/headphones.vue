<template>
  <main>
    <div class="bg-black w-full py-15 lg:py-30">
      <h1
        class="text-white uppercase text-7 lg:text-10 text-center tracking-wider"
      >
        Headphones
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
            class="w-full lg:w-1/2 flex flex-col gap-8 px-8"
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
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688646360/audiophile/products/bstkc6wsqtlhhmbxpy3c.webp",
    isNew: true,
    category: "headphones",
    slug: "xx99-mark-two-headphones",
    price: 2999,
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  },
  {
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688646361/audiophile/products/hjqrx9siy155rteimdtd.webp",
    isNew: false,
    category: "headphones",
    slug: "xx99-mark-one-headphones",
    price: 1750,
    features:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.",
  },
  {
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688646359/audiophile/products/jo1lt9wmmmjjrjcclnpi.webp",
    isNew: false,
    category: "headphones",
    slug: "xx59-headphones",
    price: 899,
    features:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
  },
]);
</script>

<style scoped>
.product-image {
  filter: drop-shadow(0px 49px 19px #cab7b7);
}
</style>
