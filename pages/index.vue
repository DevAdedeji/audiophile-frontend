<template>
  <main class="bg-white">
    <header class="bg-lightBlack">
      <Navbar />
      <div class="w-90% mx-auto h-100vh flex items-center max-wid">
        <div
          class="custom-bg w-full lg:w-1/2 h-full bg-transparent flex flex-col gap-6 justify-center ml-auto items-center lg:items-start"
        >
          <h1 class="text-3.5 uppercase text-white opacity-50 tracking-2.5">
            NEW PRODUCT
          </h1>
          <h2
            class="text-white text-8.5 md:text-14 font-700 uppercase tracking-0.5 text-center lg:text-start"
          >
            XX99 Mark II Headphones
          </h2>
          <p
            class="text-white font-500 text-3.85 opacity-70.5 w-70% text-center lg:text-start"
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <CustomButton label="See Product" />
        </div>
        <div
          class="!hidden lg:w-1/2 h-full bg-black flex items-center justify-center object-contain lg:!flex"
        >
          <img src="../assets/images/hero-image.png" />
        </div>
      </div>
    </header>
    <section class="py-30 w-90% mx-auto max-wid">
      <div
        class="flex flex-col gap-30 lg:flex-row items-center justify-between"
      >
        <div
          v-for="(link, index) in links"
          :key="index"
          class="flex flex-col gap-4 items-center justify-center w-223px h-165px xl:w-350px xl:h-204px rounded-md bg-grey relative"
        >
          <img
            :src="link.image"
            class="absolute bottom-25 xl:bottom-35 w-170px h-170px object-contain"
          />
          <p class="uppercase text-black font-700 pt-8 xl:pt-0">
            {{ link.title }}
          </p>
          <CustomLink :title="'Shop'" :url="link.link" />
        </div>
      </div>
    </section>
    <section class="pb-30 w-90% mx-auto max-wid">
      <div
        class="p bg-orange rounded-md h-600px sm:h-720px xl:h-560px flex flex-col xl:flex-row items-center gap-18 xl:justify-between overflow-y-hidden"
      >
        <div class="relative w-full xl:w-1/2 flex items-center justify-center">
          <img
            src="/images/speaker.png"
            class="w-197px h-237px mt-10 xl:w-410px xl:h-493px object-contain xl:absolute xl:left-30 xl:right-0 xl:bottom-0 xl:-top-48"
          />
        </div>
        <div
          class="w-full md:w-1/2 flex flex-col items-center justify-center xl:items-start xl:justify-start gap-6 xl:px-35"
        >
          <p
            class="text-white text-center text-8.5 md:text-14 uppercase font-700 xl:w-full xl:text-left"
          >
            ZX9 SPEAKER
          </p>
          <p
            class="text-white text-center px-6 md:px-0 xl:text-left font-500 text-4 opacity-70.5"
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <CustomButton2
            label="See product"
            class="!bg-black !text-white mt-6 xl:mt-0 hover:opacity-90"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const links = ref([
  { image: "/images/headphone.png", title: "Headphones", link: "/" },
  { image: "/images/speaker.png", title: "Speakers", link: "/" },
  { image: "/images/earphone.png", title: "Earphones", link: "/" },
]);
</script>

<style>
.custom-bg {
  background-image: url("../assets/images/hero-image.png");
  background-size: contain;
  background-position: center 50px;
  background-repeat: no-repeat;
}
.p {
  background-image: url("../assets/images/oval.png");
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
}
@media (max-width: 1024px) {
  .p {
    background-image: url("../assets/images/oval-2.png");
    background-size: contain;
    background-position: center -100px;
  }
}

@media (max-width: 700px) {
  .p {
    background-image: url("../assets/images/oval-3.png");
    background-position: center -20px;
  }
}
@media (min-width: 960px) {
  .custom-bg {
    background-image: none;
  }
}
@media (max-width: 550px) {
  .custom-bg {
    background-size: cover;
  }
}
</style>
