<template>
  <button
    class="bg-orange hover:bg-lightOrange text-white uppercase text-sm outline-none border-none cursor-pointer h-12 w-40"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "",
    required: true,
  },
});
</script>
