export const useCartModal = () => {
  const showCartModal = useState("showCartModal", () => false);
  return { showCartModal };
};
