import React, { FC } from "react";
import {
  Center,
  Heading,
  Spinner,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { setProducts } from "../../store/slices/products/products.actions";
import ProductsList from "../../components/ProductsList";
import useProducts from "../../hooks/useProducts";
import useAppStore from "../../store/app.store";

const Feed: FC = () => {
  const { dispatch } = useAppStore();

  const { products, loading } = useProducts({
    onSuccess: (data) => {
      dispatch(setProducts(data));
    },
  });

  return (
    <Center width="100%" flex={1} alignItems="flex-start">
      <ScrollView width="100%" bgColor="warmGray.50">
        <VStack marginTop={8} marginX={3} space={4}>
          <Heading>See our new products!</Heading>
          <Text fontSize="lg">
            check out our wide variety of products, from a leather jacket to a
            graphics card
          </Text>
        </VStack>

        {products && (
          <Center marginTop={16}>
            <ProductsList products={products} loading={loading} />
          </Center>
        )}
        {loading && (
          <Spinner
            accessibilityLabel="Loading products"
            marginTop={24}
            size={40}
          />
        )}
      </ScrollView>
    </Center>
  );
};

export default Feed;
