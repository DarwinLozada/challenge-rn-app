import useSWRNative from "@nandorojo/swr-react-native";
import { SWRConfiguration } from "swr";
import { PRODUCTS_URL } from "../../constants/products.constants";
import { Product } from "../../interfaces/products.interfaces";

export default function useProducts(options?: SWRConfiguration<Product[]>) {
  const fetcher = async () => {
    const data = await fetch(PRODUCTS_URL);
    return data.json();
  };

  const { data, error } = useSWRNative<Product[]>(
    "productos",
    fetcher,
    options
  );

  return {
    products: data,
    error,
    loading: !data && !error,
  };
}
