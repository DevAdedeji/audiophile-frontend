<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
const { loading } = useLoader();
const { fetchAllProducts } = useFetchProducts();
onBeforeMount(async () => {
  loading.value = false;
  await fetchAllProducts();
});
</script>
