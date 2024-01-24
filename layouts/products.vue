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
import { useFetchProducts } from "~/composables/products/products";
import { loading } from "~/composables/core/loader";
const { fetchAllProducts } = useFetchProducts();
onBeforeMount(async () => {
  loading.value = true;
  await fetchAllProducts();
});
</script>
