<template>
  <main>
    <div class="bg-black w-full py-15 lg:py-30">
      <h1
        class="text-white uppercase text-7 lg:text-10 text-center tracking-wider"
      >
        Headphones
      </h1>
    </div>
    <section class="py-20 w-90% mx-auto max-wid">
      <div v-if="products.length" class="flex flex-col gap-20">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="flex flex-col lg:flex-row items-center gap-20"
        >
          <div
            class="w-full lg:w-1/2 flex flex-col gap-8 md:px-8"
            :class="
              index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
            "
          >
            <p
              v-if="product.isNew"
              class="text-orange uppercase tracking-10px text-3.5 text-center lg:text-left"
            >
              New product
            </p>
            <h2 class="text-black text-10 font-700 text-center lg:text-left">
              {{ product.name }}
            </h2>
            <p
              class="text-4 text-black opacity-50 text-center lg:text-left"
              style="line-height: 25px"
            >
              {{ product.description }}
            </p>
            <CustomButton label="See product" class="mx-auto lg:mx-0" />
          </div>
          <div
            class="w-full lg:w-1/2 flex items-center justify-center"
            :class="
              index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
            "
          >
            <div
              class="w-540px h-300px md:h-352px md:h-560px flex items-center justify-center bg-grey rounded-md"
            >
              <img
                :src="product.image"
                class="object-contain h-200px w-200px md:w-250px md:h-250px product-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <QuickLinks />
  </main>
</template>

<script setup lang="ts">
import { type ProductEntity } from "../composables/products/types";
import { loading } from "../composables/core/loader";
const client = useSupabaseClient();
definePageMeta({
  layout: "products",
});
const products = ref<ProductEntity[]>([]);
const fetchProducts = async (category: string) => {
  const { data, error } = await client
    .from("products")
    .select("*")
    .eq("category", category);
  if (data) {
    products.value = data;
  } else if (error) {
    console.log(error);
  }
  loading.value = false;
};
onBeforeMount(async () => {
  loading.value = true;
  await fetchProducts("headphone");
});
</script>

<style scoped>
.product-image {
  filter: drop-shadow(0px 49px 19px #cab7b7);
}
</style>
