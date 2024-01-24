import { loading } from "../../composables/core/loader";
import { type ProductEntity } from "./types";
export const allProducts = ref<ProductEntity[]>([]);
export const useFetchProducts = () => {
  const client = useSupabaseClient();
  const products = ref<ProductEntity[]>([]);
  const product = ref<ProductEntity | null>(null);

  const fetchAllProducts = async () => {
    const { data, error } = await client.from("products").select("*");
    if (data) {
      allProducts.value = data;
    } else if (error) {
      console.log(error);
    }
  };

  const fetchProductsByCategory = async (category: string) => {
    loading.value = true;
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

  const fetchProduct = async (productId: string) => {
    loading.value = true;
    const { data, error } = await client
      .from("products")
      .select("*")
      .eq("id", productId);
    if (data) {
      product.value = data[0];
    } else if (error) {
      console.log(error);
    }
    loading.value = false;
  };

  return {
    fetchProductsByCategory,
    products,
    fetchProduct,
    product,
    fetchAllProducts,
    allProducts,
  };
};
