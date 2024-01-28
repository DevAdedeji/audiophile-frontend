<template>
  <div class="modal" @click.stop="showOrderModal = false">
    <div class="w-90% min-h-screen mx-auto flex items-center justify-center">
      <div
        class="bg-white w-full md:w-70% lg:w-60% xl:w-40% min-h-200px p-6 flex flex-col gap-6 rounded-md"
        @click.stop
      >
        <img src="../assets/images/checked.png" class="w-64px h-64px" />
        <h1
          class="text-black font-700 text-8 uppercase"
          style="line-height: 36px; letter-spacing: 1.143px"
        >
          Thank you for your order
        </h1>
        <p class="opacity-50 text-black font-500 text-3.5">
          You will receive an email confirmation shortly.
        </p>
        <CustomButton
          label="Continue Shopping"
          class="w-full my-3"
          @click="showOrderModal = false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { showOrderModal } = useOrderModal();
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
