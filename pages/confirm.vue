<template>
  <div class="flex items-center justify-center h-screen bg-white">
    <div class="flex flex-col sm:flex-row items-center justify-center gap-2">
      <CustomLoader />
      <h3 class="text-black text-xl">
        Please do not refresh the page &nbsp; 🙏🏽
      </h3>
    </div>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  setTimeout(() => {
    navigateTo("/");
  }, 2000);
});
</script>
