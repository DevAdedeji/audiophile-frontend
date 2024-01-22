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
          <img src="../assets/images/hero-image.png" alt="an headphone image" />
        </div>
      </div>
    </header>
    <QuickLinks />
    <section class="pb-30 w-90% mx-auto max-wid">
      <div
        class="p bg-orange rounded-md h-600px sm:h-720px xl:h-560px flex flex-col xl:flex-row items-center gap-18 xl:justify-between overflow-y-hidden"
      >
        <div class="relative w-full xl:w-1/2 flex items-center justify-center">
          <img
            src="/images/speaker.png"
            class="w-197px h-237px mt-10 xl:w-410px xl:h-493px object-contain xl:absolute xl:left-30 xl:right-0 xl:bottom-0 xl:-top-48"
            alt="ZX9 SPEAKER image"
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
    <section class="pb-30 w-90% mx-auto max-wid">
      <div class="x h-320px rounded-md">
        <div
          class="px-6 lg:px-0 w-65% lg:w-40% h-full flex flex-col gap-7 items-center justify-center"
        >
          <p class="text-black text-8 uppercase font-700">ZX7 SPEAKER</p>
          <CustomButton2 label="See product" />
        </div>
      </div>
    </section>
    <section class="pb-30 w-90% mx-auto max-wid">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-30px"
      >
        <div class="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="../assets/images/earphone.png"
            class="rounded-md w-full h-320px object-cover"
            alt="YX1 EARPHONES image"
          />
        </div>
        <div
          class="bg-grey w-full md:w-1/2 h-320px flex flex-col justify-center gap-7 px-10 lg:px-20 rounded-md"
        >
          <p class="text-black text-7 lg:text-8 uppercase font-700">
            YX1 EARPHONES
          </p>
          <CustomButton2 label="See product" />
        </div>
      </div>
    </section>
    <TheBest />
    <Footer />
  </main>
</template>

<script setup lang="ts"></script>

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
.x {
  background-image: url("../assets/images/speaker-standing.png");
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
@media (max-width: 1024px) {
  .p {
    background-image: url("../assets/images/oval-2.png");
    background-size: contain;
    background-position: center -100px;
  }
  .x {
    background-image: url("../assets/images/speaker-standing-2.png");
  }
}

@media (max-width: 700px) {
  .p {
    background-image: url("../assets/images/oval-3.png");
    background-position: center -20px;
  }
  .x {
    background-image: url("../assets/images/speaker-standing-3.png");
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
