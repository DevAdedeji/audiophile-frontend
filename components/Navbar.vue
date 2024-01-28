<template>
  <nav
    class="absolute top-0 right-0 left-0 h-10vh flex items-center justify-between w-90% mx-auto max-wid relative"
  >
    <div class="flex items-center">
      <button
        class="bg-transparent border-none outline-none flex items-center justify-center block p-2 mr-10 lg:hidden cursor-pointer"
        aria-label="menu icon to toggle mobile menu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <img src="../assets/icons/hamburger.svg" alt="menu icon" />
      </button>

      <NuxtLink to="/" class="flex items-center justify-center">
        <img
          src="../assets/images/logo.png"
          width="143"
          height="25"
          alt="Audiophile logo"
        />
      </NuxtLink>
    </div>
    <ul class="hidden items-center gap-6 list-none lg:flex">
      <li v-for="link in links" :key="link.title">
        <NuxtLink
          :to="link.url"
          class="uppercase text-3 hover:text-orange"
          :class="route.path === link.url ? 'text-orange' : 'text-white'"
          >{{ link.title }}</NuxtLink
        >
      </li>
    </ul>
    <button
      class="pr-4 border-none outline-none bg-transparent cursor-pointer"
      @click="showCartModal = !showCartModal"
    >
      <img
        src="../assets/icons/cart.svg"
        width="23.33"
        height="20"
        alt="cart icon"
      />
    </button>
    <div
      v-if="showMobileMenu"
      class="absolute top-10vh left-0 right-0 w-full z-100 bg-white rounded-b-md shadow-md lg:!hidden"
    >
      <div
        class="w-90% mx-auto flex flex-col gap-20 md:flex-row items-center py-20"
      >
        <div
          v-for="(link, index) in categorylinks"
          :key="index"
          class="flex flex-col gap-4 items-center justify-center w-223px h-165px rounded-md bg-grey relative"
        >
          <img
            :src="link.image"
            class="absolute bottom-25 xl:bottom-35 w-84px h-101px object-contain img-mobile"
            :alt="link.alt"
          />
          <p class="uppercase text-black font-700 pt-8 xl:pt-0">
            {{ link.title }}
          </p>
          <CustomLink
            :title="'Shop'"
            :url="link.link"
            @click.stop="showMobileMenu = false"
          />
        </div>
      </div>
    </div>
    <CartModal v-if="showCartModal" />
  </nav>
</template>

<script setup lang="ts">
import { useCartModal } from "../composables/core/cart";
const { showCartModal } = useCartModal();
const route = useRoute();
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Headphones",
    url: "/headphones",
  },
  {
    title: "Speakers",
    url: "/speakers",
  },
  {
    title: "Earphones",
    url: "/earphones",
  },
];
const categorylinks = ref([
  {
    image: "/images/headphone.png",
    title: "Headphones",
    link: "/headphones",
    alt: "headphone image",
  },
  {
    image: "/images/speaker.png",
    title: "Speakers",
    link: "/speakers",
    alt: "speaker image",
  },
  {
    image: "/images/earphone.png",
    title: "Earphones",
    link: "/earphones",
    alt: "earphone image",
  },
]);
const showMobileMenu = ref(false);
</script>

<style scoped>
nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
