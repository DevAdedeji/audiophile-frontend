<template>
  <main class="bg-grey">
    <div class="w-90% mx-auto">
      <div class="py-10">
        <button
          class="bg-transparent outline-none border-none text-4 font-500 text-black opacity-50 cursor-pointer hover:text-orange hover:opacity-100"
          @click="router.go(-1)"
        >
          Go back
        </button>
      </div>
      <div
        class="flex items-start flex-col gap-8 lg:gap-0 lg:flex-row justify-between pb-10"
      >
        <div
          class="bg-white w-full lg:w-65% rounded-md p-8 flex flex-col gap-8"
        >
          <h1
            class="text-black font-700 text-8 uppercase"
            style="letter-spacing: 1.143px"
          >
            Checkout
          </h1>
          <!-- Form -->
          <form class="flex flex-col gap-12" @submit.prevent>
            <!-- Billing details -->
            <div>
              <p
                class="uppercase text-3.5 font-700 text-orange"
                style="letter-spacing: 0.929px"
              >
                Billing details
              </p>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-8">
                <CustomTextField
                  v-model="form.name"
                  label="Name"
                  placeholder="Your name"
                  error-msg="Name is required"
                  :error="$v.name.$error"
                />
                <CustomTextField
                  v-model="form.email"
                  type="email"
                  label="Email Address"
                  placeholder="Your email address"
                  error-msg="Email is required"
                  :error="$v.email.$error"
                />
                <CustomNumberField
                  v-model="form.phone"
                  label="Phone Number"
                  placeholder="+ (234) 81 419 9233"
                  error-msg="Phone number is required"
                  :error="$v.phone.$error"
                />
              </div>
            </div>
            <!-- Shipping info -->
            <div>
              <p
                class="uppercase text-3.5 font-700 text-orange"
                style="letter-spacing: 0.929px"
              >
                shipping info
              </p>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-8">
                <CustomTextField
                  v-model="form.address"
                  label="Address"
                  placeholder="1137 Williams Avenue"
                  error-msg="Address is required"
                  :error="$v.address.$error"
                />
                <CustomTextField
                  v-model="form.zip_code"
                  label="ZIP Code"
                  placeholder="211102"
                  error-msg="Zip code is required"
                  :error="$v.zip_code.$error"
                />
                <CustomTextField
                  v-model="form.city"
                  label="City"
                  placeholder="New york"
                  error-msg="City is required"
                  :error="$v.city.$error"
                />
                <CustomTextField
                  v-model="form.country"
                  label="Country"
                  placeholder="USA"
                  error-msg="Country is required"
                  :error="$v.country.$error"
                />
              </div>
            </div>
            <!-- Payment details -->
            <div>
              <p
                class="uppercase text-3.5 font-700 text-orange"
                style="letter-spacing: 0.929px"
              >
                payment details
              </p>
              <div class="flex flex-col gap-2 pt-8">
                <label class="font-700 text-3">Payment options</label>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <CustomRadio
                    v-for="option in paymentOptions"
                    :key="option.id"
                    :placeholder="option.placeholder"
                    :value="option"
                    @update-value="paymentOptionChosen"
                  />
                </div>
              </div>
            </div>
            <div class="flex items-center gap-4 py-6">
              <img src="../assets/images/export.png" class="w-48px h-48px" />
              <p class="text-black opacity-50 font-500 text-3.5">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          </form>
        </div>
        <div class="w-full lg:w-30% bg-white rounded-md p-8">
          <h1
            class="text-black font-700 text-4.5 uppercase"
            style="letter-spacing: 1.143px"
          >
            Summary
          </h1>
          <div v-if="cartItems.length" class="flex flex-col gap-4 mt-6">
            <div v-for="(item, index) in cartItems" :key="index">
              <div class="flex items-center justify-between gap-2 md:gap-4">
                <div
                  class="w-64px h-64px flex items-center justify-center rounded-md bg-grey"
                >
                  <img :src="item.image" class="w-40px h-40px object-cover" />
                </div>
                <div class="flex flex-col">
                  <p class="text-black font-700 text-3.5">
                    {{
                      item.name.length > 8
                        ? `${item.name.slice(0, 9)}...`
                        : item.name
                    }}
                  </p>
                  <p class="text-black font-700 text-3.5 opacity-50">
                    {{ "₦" + item.price.toLocaleString() }}
                  </p>
                </div>
                <p class="text-black opacity-50 font-700 text-3.5">
                  {{ "x" + item.quantity }}
                </p>
              </div>
            </div>
            <!-- Total -->
            <div class="flex items-center justify-between">
              <p class="text-black uppercase opacity-50 text-3.5 font-500">
                Total
              </p>
              <p class="text-black uppercase text-3.5 font-700">
                {{ "₦" + totalAmount.toLocaleString() }}
              </p>
            </div>
            <!-- Shipping -->
            <div class="flex items-center justify-between">
              <p class="text-black uppercase opacity-50 text-3.5 font-500">
                Shipping Cost
              </p>
              <p class="text-black uppercase text-3.5 font-700">
                {{ "₦" + shippingCost }}
              </p>
            </div>
            <!-- VAT -->
            <div class="flex items-center justify-between">
              <p class="text-black uppercase opacity-50 text-3.5 font-500">
                VAT (INCLUDED)
              </p>
              <p class="text-black uppercase text-3.5 font-700">
                {{ "₦" + vat }}
              </p>
            </div>
            <!-- Grand Total -->
            <div class="flex items-center justify-between mt-4">
              <p class="text-black uppercase opacity-50 text-3.5 font-500">
                GRAND TOTAL
              </p>
              <p class="text-orange uppercase text-3.5 font-700">
                {{ "₦" + grandTotal }}
              </p>
            </div>
            <CustomButton
              type="submit"
              label="Continue"
              class="my-4 w-full"
              @click="makePayment"
            />
          </div>
          <div v-else>
            <p class="text-black text-lg font-700 text-center py-10">
              Cart is empty!
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { type PaymentOptions } from "~/composables/products/types";
const { loading } = useLoader();
const { cartItems, fetchCartItems, clearCart } = useCart();
const { showOrderModal } = useOrderModal();
definePageMeta({
  layout: "products",
  middleware: ["auth"],
});
const router = useRouter();
// At the top of your <script> or within the setup function
declare let FlutterwaveCheckout: any;

const form = ref({
  name: "",
  email: "",
  phone: "",
  address: "",
  zip_code: "",
  city: "",
  country: "",
  paymentOption: 1,
});

const rules = computed(() => {
  return {
    name: { required },
    email: { required },
    phone: { required },
    address: { required },
    zip_code: { required },
    city: { required },
    country: { required },
    paymentOption: { required },
  };
});

const $v = useVuelidate(rules, form.value);

const paymentOptions = ref<PaymentOptions[]>([
  {
    id: 1,
    placeholder: "Flutterwave",
    isSelected: true,
  },
  {
    id: 2,
    placeholder: "Cash On Delivery",
    isSelected: false,
  },
]);

const paymentOptionChosen = (val: PaymentOptions) => {
  paymentOptions.value.forEach((option) => (option.isSelected = false));
  const option = paymentOptions.value.find((p) => val.id === p.id);
  if (option) {
    option.isSelected = true;
    form.value.paymentOption = option.id;
  }
};

const totalAmount = computed(() => {
  if (cartItems.value) {
    return cartItems.value.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  } else {
    return 0;
  }
});
const shippingCost = 10;
const vat = 10;

const grandTotal = computed(() => {
  return totalAmount.value + vat + shippingCost;
});

const makePayment = async () => {
  const isFormCorrect = await $v.value.$validate();
  if (isFormCorrect) {
    if (form.value.paymentOption === 1 && process.client) {
      const config = useRuntimeConfig();
      const publicKey = config.public.flutterwave_public_key;
      FlutterwaveCheckout({
        public_key: publicKey,
        tx_ref: "ay_" + Math.floor(Math.random() * 1000000000 + 1),
        amount: grandTotal.value,
        currency: "NGN",
        payment_optiona: "banktransfer",
        redirect_url: null,
        customer: {
          email: form.value.email,
          phonenumber: form.value.phone,
          name: form.value.name,
        },
        callback: async function () {
          showOrderModal.value = true;
          await clearCart();
        },
        customizations: {
          title: "Audiophile - Your Premier Audio Equipment Destination",
          description: "Audiophile payment integration",
          logo: "https://res.cloudinary.com/dtomoi7fb/image/upload/v1706475334/favicon_hbppix.ico",
        },
      });
    } else {
      showOrderModal.value = true;
      await clearCart();
      router.push("/");
    }
  }
};

onBeforeMount(async () => {
  await fetchCartItems();
  loading.value = false;
});

onMounted(() => {
  const user = useSupabaseUser();
  if (user.value) {
    form.value.email = user.value.user_metadata.email;
    form.value.name = user.value.user_metadata.full_name;
  }
});
</script>
