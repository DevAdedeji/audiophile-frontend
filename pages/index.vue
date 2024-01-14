<template>
  <div
    class="flex flex-col gap-4 items-center justify-center min-h-dvh w-1/2 mx-auto"
  >
    <CustomButton label="See product" />
    <CustomButton2 label="See product" />
    <CustomTextField
      v-model="text"
      placeholder="Enter a text"
      label="Name"
      error-msg="Wrong format"
      :error="false"
    />
    <CustomTextField
      v-model="text"
      placeholder="Enter a text"
      label="Name"
      error-msg="Wrong format"
      :error="true"
    />
    <CustomLink title="SHOP" url="/" />
  </div>
</template>

<script setup lang="ts">
const text = ref<string>("");
</script>
