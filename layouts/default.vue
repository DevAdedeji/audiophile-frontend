<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { useFetchProducts } from "~/composables/products/products";
const { fetchAllProducts } = useFetchProducts();
onBeforeMount(async () => {
  await fetchAllProducts();
});
</script>
