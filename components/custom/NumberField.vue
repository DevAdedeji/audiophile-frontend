<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <label
        :id="label"
        class="font-700 text-3"
        :class="error ? 'text-danger' : 'text-black '"
        :for="label"
        >{{ label }}</label
      >
      <span v-if="error" class="text-danger font-700 text-3">{{
        errorMsg
      }}</span>
    </div>
    <input
      :id="label"
      v-model="modelValue"
      type="tel"
      :for="label"
      :name="label"
      class="h-14 w-full bg-transparent outline-none input-border rounded-2 px-4 focus:border-orange caret-orange"
      :class="error ? '!border-danger' : ''"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMsg: {
    type: String,
    default: "",
  },
});
const modelValue = defineModel<string>({ required: true });
</script>
