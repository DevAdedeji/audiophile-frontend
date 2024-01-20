<template>
  <nav
    class="absolute top-0 right-0 left-0 h-10vh flex items-center justify-between w-90% mx-auto max-wid"
  >
    <div class="flex items-center">
      <img
        src="../assets/icons/hamburger.svg"
        class="block mr-10 lg:hidden"
        width="16"
        height="15"
        alt="menu icon"
      />

      <img
        src="../assets/images/logo.png"
        width="143"
        height="25"
        alt="Audiophile logo"
      />
    </div>
    <ul class="hidden items-center gap-6 list-none lg:flex">
      <li v-for="link in links" :key="link.title">
        <NuxtLink
          :to="link.url"
          class="text-white uppercase text-3 hover:text-orange"
          >{{ link.title }}</NuxtLink
        >
      </li>
    </ul>
    <NuxtLink to="/" class="pr-4">
      <img
        src="../assets/icons/cart.svg"
        width="23.33"
        height="20"
        alt="cart icon"
      />
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Headphones",
    url: "/",
  },
  {
    title: "Speakers",
    url: "/",
  },
  {
    title: "Earphones",
    url: "/",
  },
];
</script>

<style scoped>
nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
