import { Center, Heading, Spinner, ScrollView } from "native-base";
import React, { FC } from "react";
import { setProducts } from "../../store/slices/products/products.actions";
import ProductsList from "../../components/ProductsList";
import useProducts from "../../hooks/useProducts";
import useAppStore from "../../store/app.store";

const Home: FC = () => {
  const { dispatch } = useAppStore();

  const { products, loading } = useProducts({
    onSuccess: (data) => {
      dispatch(setProducts(data));
    },
  });

  return (
    <Center width="100%" flex={1} alignItems="flex-start">
      <Heading>See our new products!</Heading>
      <ScrollView width="100%">
        {products && <ProductsList products={products} loading={loading} />}
        {loading && <Spinner />}
      </ScrollView>
    </Center>
  );
};

export default Home;
