<template>
  <div class="bg-white w-full">
    <header class="bg-black">
      <Navbar />
    </header>
    <slot />
    <TheBest class="pt-30" />
    <Footer />
  </div>
</template>

<script setup>
import { loading } from "~/composables/core/loader";
onBeforeMount(() => {
  loading.value = true;
});
</script>
