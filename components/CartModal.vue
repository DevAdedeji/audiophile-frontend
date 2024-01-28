<template>
  <div class="modal" @click.stop="showCartModal = false">
    <div class="w-90% mx-auto flex items-center mt-15vh pr-4">
      <div
        class="w-full md:w-377px ml-auto bg-white rounded-md p-6"
        @click.stop
      >
        <!-- Heading -->
        <div class="flex items-center justify-between">
          <h2 class="text-black text-4.5 uppercase font-700">
            Cart ({{ cartItems.length }})
          </h2>
          <button
            class="cursor-pointer bg-transparent outline-none border-none opacity-50"
          >
            Clear all
          </button>
        </div>
        <div v-if="cartItems.length" class="flex flex-col gap-6 mt-6">
          <div v-for="(item, index) in cartItems" :key="index">
            <div class="flex items-center justify-between gap-2 md:gap-4">
              <div
                class="w-64px h-64px flex items-center justify-center rounded-md bg-grey"
              >
                <img :src="item.image" class="w-40px h-40px object-cover" />
              </div>
              <div class="flex flex-col">
                <p class="text-black font-700 text-3.5">
                  {{
                    item.name.length > 8
                      ? `${item.name.slice(0, 9)}...`
                      : item.name
                  }}
                </p>
                <p class="text-black font-700 text-3.5 opacity-50">
                  {{ item.price }}
                </p>
              </div>
              <div class="bg-grey flex items-center gap-3 h-8 px-2">
                <button
                  class="border-none outline-none text-6 text-black opacity-50 px-2 cursor-pointer"
                  @click="item.quantity > 1 ? item.quantity-- : ''"
                >
                  -
                </button>
                <p class="text-black text-3.5 px-2">{{ item.quantity }}</p>
                <button
                  class="border-none outline-none text-6 text-black opacity-50 px-2 cursor-pointer"
                  @click="item.quantity++"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <!-- Total -->
          <div class="flex items-center justify-between">
            <p class="text-black uppercase opacity-50 text-3.5 font-500">
              Total
            </p>
            <p class="text-black uppercase text-3.5 font-700">
              {{ "₦" + totalAmount.toLocaleString() }}
            </p>
          </div>
          <CustomButton label="Checkout" class="w-full my-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartModal } from "../composables/core/cart";
const { showCartModal } = useCartModal();
const cartItems = ref([
  {
    name: "XX99 Mark II Headphones",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688646360/audiophile/products/bstkc6wsqtlhhmbxpy3c.webp",
    price: 2999,
    quantity: 1,
  },
  {
    name: "ZX9 SPEAKER",
    image:
      "https://res.cloudinary.com/dxvhsze0l/image/upload/v1688648202/audiophile/products/yzqbg76hc1earixs1sbn.webp",
    price: 2999,
    quantity: 1,
  },
]);
const totalAmount = computed(() =>
  cartItems.value.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0),
);
</script>

<style scoped>
.modal {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
}
</style>
