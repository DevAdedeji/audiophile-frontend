<template>
  <NuxtLayout>
    <div v-if="loading" class="loading">
      <div class="h-5px bg-orange progress-bar"></div>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { loading } from "./composables/core/loader";
</script>

<style scoped>
.loading {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
}
.progress-bar {
  animation: moveProgress 1s linear infinite;
}
@keyframes moveProgress {
  0%,
  100% {
    width: 0;
  }
  50% {
    width: 100%;
  }
}
</style>
