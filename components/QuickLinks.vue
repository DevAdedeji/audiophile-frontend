<template>
  <section class="py-30 w-90% mx-auto max-wid">
    <div class="flex flex-col gap-30 lg:flex-row items-center justify-between">
      <div
        v-for="(link, index) in links"
        :key="index"
        class="flex flex-col gap-4 items-center justify-center w-223px h-165px xl:w-350px xl:h-204px rounded-md bg-grey relative"
      >
        <img
          :src="link.image"
          class="absolute bottom-25 xl:bottom-35 w-170px h-170px object-contain"
          :alt="link.alt"
        />
        <p class="uppercase text-black font-700 pt-8 xl:pt-0">
          {{ link.title }}
        </p>
        <CustomLink :title="'Shop'" :url="link.link" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const links = ref([
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
</script>
