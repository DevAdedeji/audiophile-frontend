<template>
  <NuxtLink
    :to="url"
    class="flex items-center gap-3 hover:text-orange text-black cursor-pointer"
  >
    <p class="text-3 uppercase">{{ title }}</p>
    <img src="../../assets/icons/right.svg" />
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    default: "",
    required: true,
  },
  title: {
    type: String,
    default: "",
    required: true,
  },
});
</script>
