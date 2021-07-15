import React, { FC } from "react";
import {
  Center,
  ScrollView,
  Text,
  VStack,
  Heading,
  Button,
  PresenceTransition,
} from "native-base";
import { Product } from "../../interfaces/products.interfaces";
import ProductCard from "../../components/ProductCard";
import useAppStore from "../../store/app.store";
import { useNavigation } from "@react-navigation/native";

interface Props {
  data: Product[];
}

const Favorites: FC<Props> = () => {
  const navigation = useNavigation();

  const { state } = useAppStore();

  const { products } = state.favorites;

  const handleClickNavigation = () => {
    navigation.navigate({
      name: "Feed",
      params: undefined,
    });
  };

  return (
    <ScrollView marginTop={20} paddingX={5}>
      <Heading>Your favorite products</Heading>
      <Center marginTop={12} marginBottom={9}>
        <VStack space={5} width="100%">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard data={product} type="favorites" key={product.id} />
            ))
          ) : (
            <PresenceTransition
              visible={products.length === 0}
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
              <Center marginTop={24}>
                <VStack space={8}>
                  <Text fontSize="xl">You have no favorite products</Text>
                  <Button
                    colorScheme="lightBlue"
                    onPress={handleClickNavigation}
                  >
                    See our catalogue
                  </Button>
                </VStack>
              </Center>
            </PresenceTransition>
          )}
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default Favorites;
