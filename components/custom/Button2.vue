<template>
  <component
    :is="componentType"
    class="h-12 w-40 text-black outline-none border border-black hover:bg-black hover:text-white cursor-pointer uppercase text-sm flex items-center justify-center"
    :to="to"
  >
    {{ label }}
  </component>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "",
    required: true,
  },
  to: {
    type: String,
    default: "",
    required: false,
  },
});
const NuxtLink = resolveComponent("NuxtLink");
const componentType = computed(() => (props.to ? NuxtLink : "button"));
</script>
