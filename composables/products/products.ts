import { toast } from "vue3-toastify";
import { type ProductEntity } from "./types";
export const allProducts = ref<ProductEntity[]>([]);
export const useFetchProducts = () => {
  // States
  const { loading } = useLoader();
  const products = ref<ProductEntity[]>([]);
  const product = ref<ProductEntity | null>(null);
  // Supabase client
  const client = useSupabaseClient();
  const fetchAllProducts = async () => {
    const { data, error } = await client.from("products").select("*");
    if (data) {
      allProducts.value = data;
    } else if (error) {
      toast.error(error.message, {
        theme: "auto",
      });
    }
  };

  const fetchProductsByCategory = async (category: string) => {
    loading.value = true;
    if (!allProducts.value.length) {
      const { data, error } = await client
        .from("products")
        .select("*")
        .eq("category", category);
      if (data) {
        products.value = data;
      } else if (error) {
        toast.error(error.message, {
          theme: "auto",
        });
      }
    } else {
      const filteredProducts = allProducts.value.filter(
        (product) => product.category === category,
      );
      products.value = filteredProducts;
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
      toast.error(error.message, {
        theme: "auto",
      });
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
