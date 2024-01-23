<template>
  <NuxtLayout>
    <div v-if="loading" class="loading cursor-not-allowed">
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
  width: 100%;
  position: absolute;
  height: 5px;
  animation-name: loader-animation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes loader-animation {
  0% {
    left: -80%;
  }
  49% {
    left: 80%;
  }
  50% {
    left: 80%;
  }
  100% {
    left: -80%;
  }
}
</style>
