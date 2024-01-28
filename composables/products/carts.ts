import { toast } from "vue3-toastify";
import { type CartedProductEntity } from "~/composables/products/types";
export const useCart = () => {
  // Cart items
  const cartItems = ref<CartedProductEntity[] | []>([]);
  //   Loading states
  const adding = ref(false);
  const fetching = ref(true);
  // Supabase client
  const client = useSupabaseClient();
  //   Logged in user
  const user = useSupabaseUser();
  const fetchCartItems = async () => {
    if (user.value) {
      fetching.value = true;
      const userId = user.value.id;
      const { data, error } = await client
        .from("cart")
        .select("*")
        .eq("user_id", userId);
      if (data) {
        cartItems.value = data;
      } else if (error) {
        toast.error(error.message, {
          theme: "auto",
        });
      }
      fetching.value = false;
    }
  };
  const addToCart = async (product: any) => {
    adding.value = true;
    const { data, error } = await client
      .from("cart")
      .upsert(product)
      .select("*");
    if (data) {
      cartItems.value = data;
      toast.success("Added to cart successfully", {
        theme: "auto",
      });
    } else if (error) {
      toast.error(error.message, {
        theme: "auto",
      });
    }
    adding.value = false;
  };
  const clearCart = async () => {
    if (user.value) {
      fetching.value = true;
      const { error } = await client
        .from("cart")
        .delete()
        .eq("user_id", user.value.id);
      if (!error) {
        cartItems.value = [];
        toast.success("Cart cleared successfully", {
          theme: "auto",
        });
      } else if (error) {
        toast.error(error.message, {
          theme: "auto",
        });
      }
      fetching.value = false;
    }
  };
  return { fetchCartItems, fetching, cartItems, adding, addToCart, clearCart };
};
