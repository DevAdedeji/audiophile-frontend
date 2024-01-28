<template>
  <main>
    <div class="w-90% mx-auto">
      <div class="py-10">
        <button
          class="outline-none border-none text-4 font-500 text-black opacity-50 cursor-pointer"
          @click="router.go(-1)"
        >
          Go back
        </button>
      </div>
      <!-- Product Details -->
      <div v-if="product" class="flex flex-col gap-20">
        <!-- Product info -->
        <div class="flex flex-col lg:flex-row items-center gap-20">
          <div class="w-full lg:w-1/2 flex items-center justify-center">
            <div
              class="w-540px h-300px md:h-352px md:h-560px flex items-center justify-center bg-grey rounded-md"
            >
              <img
                :src="product.image"
                class="object-contain h-200px w-200px md:w-250px md:h-250px product-image"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2 flex flex-col gap-8 md:px-8">
            <p
              v-if="product.isNew"
              class="text-orange uppercase tracking-10px text-3.5"
            >
              New product
            </p>
            <h2 class="text-black text-10 font-700">
              {{ product.name }}
            </h2>
            <p class="text-4 text-black opacity-50" style="line-height: 25px">
              {{ product.description }}
            </p>
            <p class="text-4 text-black">
              {{ "₦" + product.price.toLocaleString() }}
            </p>
            <div class="flex items-center gap-1">
              <div class="bg-grey flex items-center gap-3 h-12 px-3">
                <button
                  class="border-none outline-none text-6 text-black opacity-50 px-3 cursor-pointer"
                  @click="quantity > 1 ? quantity-- : ''"
                >
                  -
                </button>
                <p class="text-black text-4 px-3">{{ quantity }}</p>
                <button
                  class="border-none outline-none text-6 text-black opacity-50 px-3 cursor-pointer"
                  @click="quantity++"
                >
                  +
                </button>
              </div>
              <CustomButton
                :label="adding ? 'Adding...' : 'Add to cart'"
                :disabled="adding"
                :class="adding ? 'cursor-not-allowed opacity-50' : ''"
                @click="addProductToCart"
              />
            </div>
          </div>
        </div>
        <!-- Product features -->
        <div class="flex flex-col lg:flex-row justify-between gap-20">
          <div class="w-full lg:w-60% flex flex-col gap-6 lg:gap-8">
            <h3 class="text-8 uppercase text-black">FEATURES</h3>
            <p
              class="w-full lg:w-90% text-black font-500 opacity-50"
              style="line-height: 25px"
            >
              {{ product.feature_desc }}
            </p>
          </div>
          <div class="w-full lg:w-30% flex flex-col gap-6 lg:gap-8">
            <h3 class="text-8 uppercase text-black">In the box</h3>
            <ul class="list-none flex flex-col gap-2">
              <li
                v-for="(feature, index) in product.features"
                :key="index"
                class="flex items-center gap-2"
              >
                <p class="text-4 font-500 pr-3 text-orange">
                  {{ feature.quantity + "x" }}
                </p>
                <p class="text-black opacity-50 font-500 text-4">
                  {{ feature.desc }}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <!-- Product Image gallery -->
        <div class="gallery">
          <img
            v-for="(image, index) in product.images"
            :key="index"
            :src="image"
            :class="index === 2 ? 'h-368px lg:h-592px' : 'h-174px lg:h-280px'"
          />
        </div>
      </div>
      <div v-if="PRODUCTS_YOU_MAY_LIKE.length" class="mt-30">
        <h3
          class="text-black uppercase text-6 lg:text-8 font-700 text-center pb-10"
        >
          You may also like
        </h3>
        <div class="flex flex-col lg:flex-row gap-15 lg:gap-5">
          <div
            v-for="randomProduct in PRODUCTS_YOU_MAY_LIKE"
            :key="randomProduct.id"
            class="flex flex-col items-center justify-center gap-4"
          >
            <div
              class="p-5 lg:p-10 xxl:p-20 rounded-md bg-grey flex items-center justify-center"
            >
              <img
                :src="randomProduct.image"
                class="object-contain w-199px h-199px"
              />
            </div>
            <p class="text-black text-6 uppercase text-center">
              {{ randomProduct.name }}
            </p>
            <CustomButton
              label="See product"
              :to="`/product/${randomProduct.id}`"
              class="mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
      <QuickLinks class="mt-20 xl:mt-40" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { toast } from "vue3-toastify";
definePageMeta({
  layout: "products",
});
const { login } = useAuth();
const user = useSupabaseUser();
const route = useRoute();
const router = useRouter();
const productId = route.params.id as string;
const quantity = ref(1);
const { fetchProduct, product, allProducts } = useFetchProducts();
const { adding, addToCart } = useCart();

watch(product, () => {
  useCustomHead(
    product.value?.name || "",
    product.value?.description || "",
    product.value?.image || "",
  );
});

function selectRandomThree<T>(array: T[]): T[] {
  // If the array has less than 3 items, return the array itself
  if (array.length <= 3) {
    return array;
  }

  // Create a copy of the array and shuffle it using the Fisher-Yates algorithm
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Return the first 3 items from the shuffled array
  return shuffledArray.slice(0, 3);
}
const PRODUCTS_YOU_MAY_LIKE = computed(() => {
  if (allProducts.value.length) {
    const randomProducts = selectRandomThree(allProducts.value);
    return randomProducts;
  }
  return [];
});
const addProductToCart = async () => {
  if (user.value) {
    if (product.value) {
      const cartProduct = {
        ...product.value,
        quantity: quantity.value,
        user_id: user.value.id,
      };
      await addToCart(cartProduct);
    }
  } else {
    toast.error("Pls login first to add to cart", {
      theme: "auto",
    });
    login();
  }
};
onBeforeMount(async () => {
  useCustomHead("", "", "");
  await fetchProduct(productId);
});
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
.gallery img {
  object-fit: cover;
  border-radius: 0.8rem;
  width: 100% !important;
  &:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }

  &:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }

  &:nth-child(3) {
    grid-area: 1 / 2 / 3 / 3;
  }
}
@media screen and (max-width: 768px) {
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
