<template>
  <div class="">
    <button
      class="flex items-center gap-2 h-14 w-full bg-transparent outline-none input-border rounded-2 px-4 focus:border-orange caret-orange cursor-pointer"
      @click="selectOption(value)"
    >
      <div
        class="w-20px h-20px rounded-50% flex items-center justify-center"
        style="border: 1px solid #cfcfcf"
      >
        <div
          v-if="value.isSelected"
          class="w-10px h-10px bg-orange rounded-50%"
        ></div>
      </div>
      <p class="text-3.5 text-black">{{ placeholder }}</p>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { type PaymentOptions } from "~/composables/products/types";
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: Object as PropType<PaymentOptions>,
    required: true,
  },
});
const emits = defineEmits<{
  (event: "update-value", value: PaymentOptions): void;
}>();
const selectOption = (value: PaymentOptions) => {
  emits("update-value", value);
};
</script>
