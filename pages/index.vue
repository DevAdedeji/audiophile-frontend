<template>
  <main class="bg-lightBlack">
    <header>
      <Navbar />
      <div class="w-90% mx-auto h-100vh flex items-center max-wid">
        <div
          class="custom-bg w-full lg:w-1/2 h-full bg-transparent flex flex-col gap-6 justify-center ml-auto items-center lg:items-start"
        >
          <h1 class="text-3.5 uppercase text-white opacity-50 tracking-2.5">
            NEW PRODUCT
          </h1>
          <h2
            class="text-white text-14 font-700 uppercase tracking-0.5 text-center lg:text-start"
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
