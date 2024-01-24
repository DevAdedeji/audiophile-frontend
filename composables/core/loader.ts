export const useLoader = () => {
  const loading = useState("loading", () => true);
  return { loading };
};
