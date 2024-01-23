import { loading } from "../../composables/core/loader";
import { type ProductEntity } from "./types";

export const useFetchProducts = () => {
  const client = useSupabaseClient();
  const products = ref<ProductEntity[]>([]);
  const fetchProducts = async (category: string) => {
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
  return { fetchProducts, products };
};
