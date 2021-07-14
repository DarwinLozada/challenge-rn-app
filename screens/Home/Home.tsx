import { Box, Center, Container, Heading } from "native-base";
import React, { FC } from "react";
import { View, Text, ScrollView } from "react-native";
import ProductsList from "../../components/ProductsList";
import useProducts from "../../hooks/useProducts";

const Home: FC = () => {
  const { products, loading } = useProducts();

  return (
    <Center width="100%" flex={1} alignItems="flex-start">
      <ScrollView>
        <Heading>See our new products!</Heading>
        <ProductsList products={products} loading={loading} />
      </ScrollView>
    </Center>
  );
};

export default Home;
