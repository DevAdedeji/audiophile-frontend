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
const { loading } = useLoader();
const { fetchAllProducts, allProducts } = useFetchProducts();
onBeforeMount(async () => {
  loading.value = true;
  if (!allProducts.value.length) {
    await fetchAllProducts();
  }
});
</script>
