<template>
  <div class="bg-white w-full">
    <header class="bg-black">
      <Navbar />
      <slot name="header" />
    </header>
    <slot name="content" />
    <TheBest class="pt-30" />
    <Footer />
  </div>
</template>
