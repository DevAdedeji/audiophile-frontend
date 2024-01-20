<template>
  <button
    class="bg-transparent h-12 w-40 text-black outline-none border border-black hover:bg-black hover:text-white cursor-pointer uppercase text-sm"
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
