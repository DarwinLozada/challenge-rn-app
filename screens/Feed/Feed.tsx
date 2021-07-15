import React, { FC } from "react";
import {
  Center,
  Heading,
  Spinner,
  ScrollView,
  Text,
  VStack,
  Box,
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
        <Center>
          <VStack width="88%" marginTop={8} space={4}>
            <Heading color="lightBlue.600">See our new products!</Heading>
            <Text fontSize="lg">
              check out our wide variety of products, from a leather jacket to a
              graphics card
            </Text>
            {products && (
              <Box marginTop={8} marginBottom={12}>
                <ProductsList products={products} loading={loading} />
              </Box>
            )}
          </VStack>
        </Center>

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
