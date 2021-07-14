import React, { FC } from "react";
import { Center, Box, ScrollView, Text, VStack, Heading } from "native-base";
import { Product } from "../../interfaces/products.interfaces";
import ProductCard from "../../components/ProductCard";
import useAppStore from "../../store/app.store";

interface Props {
  data: Product[];
}

const Favorites: FC<Props> = () => {
  const { state } = useAppStore();

  const { favorites } = state;

  return (
    <ScrollView marginTop={16} paddingX={5}>
      <Heading>Your favorite products</Heading>
      <Center marginTop={9}>
        <VStack space={4} width="100%">
          {favorites.products.map((product) => (
            <ProductCard data={product} type="favorites" key={product.id} />
          ))}
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default Favorites;
