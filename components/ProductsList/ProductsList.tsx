import {
  Center,
  Container,
  PresenceTransition,
  ScrollView,
  Spinner,
  VStack,
} from "native-base";
import React, { FC } from "react";
import { Product } from "../../interfaces/products.interfaces";
import ProductCard from "../ProductCard";

interface Props {
  products: Product[];
  loading: boolean;
}

const ProductsList: FC<Props> = ({ products, loading }) => {
  return (
    <Center bgColor="warmGray.50" display="flex" width="100%">
      {loading ? (
        <Spinner accessibilityLabel="Loading products" />
      ) : (
        <PresenceTransition
          visible={!loading}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 500,
            },
          }}
        >
          <Center marginTop={40}>
            <VStack space={10} alignItems="center" display="flex" width="90%">
              {products.map((product) => (
                <ProductCard data={product} key={product.id} />
              ))}
            </VStack>
          </Center>
        </PresenceTransition>
      )}
    </Center>
  );
};

export default ProductsList;
