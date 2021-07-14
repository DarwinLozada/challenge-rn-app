import {
  Box,
  Text,
  Image,
  Heading,
  Stack,
  HStack,
  Divider,
  Button,
  CheckIcon,
  AddIcon,
  IconButton,
  VStack,
} from "native-base";
import React, { FC } from "react";
import { Product } from "../../interfaces/products.interfaces";
import { HeartIcon } from "../Icons/Icons";
import useAppStore from "../../store/app.store";
import { addProduct } from "../../store/slices/favorites/favorites.actions";
import { useNavigation } from "@react-navigation/native";

interface Props {
  data: Product;
}

const ProductCard: FC<Props> = ({ data }) => {
  const navigation = useNavigation();
  const { state, dispatch } = useAppStore();
  const { favorites } = state;

  const isAddedToFavorites = favorites.products.some(
    (product) => product.id === data.id
  );

  const handleClickAddFavorites = () => {
    dispatch(addProduct(data));
  };

  const handleClickDetails = () => {
    navigation.navigate({
      name: "Details",
      params: {
        data: data,
      },
    });
  };

  return (
    <Box
      shadow={2}
      display="flex"
      bg="white"
      justifyContent="center"
      alignItems="center"
      rounded="lg"
      width="100%"
    >
      <Box bg="white" paddingY="8">
        <Image
          size="xl"
          source={{ uri: data.image }}
          alt={data.title}
          resizeMode="contain"
        />
      </Box>
      <Stack
        paddingTop="4"
        paddingX="6"
        paddingBottom="5"
        bg="white"
        width="100%"
        display="flex"
        space={2}
      >
        <VStack display="flex">
          <Heading size="md" fontWeight="bold" color="dark.50">
            {data.title}
          </Heading>
          <Text fontSize="xl" fontWeight="bold" marginY={2} color="cyan.500">
            {`${data.price}$`}
          </Text>
        </VStack>
        <HStack display="flex" justifyContent="space-between">
          <Button variant="outline" onPress={handleClickDetails}>
            <Text>Details</Text>
          </Button>
          {isAddedToFavorites ? (
            <HStack display="flex" alignItems="center" space={2}>
              <Text fontSize="lg" fontWeight={500}>
                Added
              </Text>
              <CheckIcon size={4} />
            </HStack>
          ) : (
            <IconButton
              onPress={handleClickAddFavorites}
              icon={<HeartIcon color="rose.600" />}
            />
          )}
        </HStack>
      </Stack>
    </Box>
  );
};

export default ProductCard;
