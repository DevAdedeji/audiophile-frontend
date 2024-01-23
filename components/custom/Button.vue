<template>
  <component
    :is="componentType"
    class="bg-orange hover:bg-lightOrange text-white uppercase text-sm outline-none border-none cursor-pointer h-12 w-40 flex items-center justify-center"
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
