<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { useFetchProducts } from "~/composables/products/products";
import { useLoader } from "~/composables/core/loader";
const { loading } = useLoader();
const { fetchAllProducts } = useFetchProducts();
onBeforeMount(async () => {
  loading.value = false;
  await fetchAllProducts();
});
</script>
