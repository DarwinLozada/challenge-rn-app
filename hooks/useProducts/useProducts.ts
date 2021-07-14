import useSWRNative from "@nandorojo/swr-react-native";
import { PRODUCTS_URL } from "../../constants/products.constants";

export default function useProducts() {
  const fetcher = async () => {
    const data = await fetch(PRODUCTS_URL);
    return data.json();
  };

  const { data, error } = useSWRNative("productos", fetcher);

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}
