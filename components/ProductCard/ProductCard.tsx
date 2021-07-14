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
} from "native-base";
import React, { FC } from "react";
import { Product } from "../../interfaces/products.interfaces";
import { HeartIcon } from "../Icons/Icons";
import useAppStore from "../../store/app.store";
import { addProduct } from "../../store/slices/favorites/favorites.actions";

interface Props {
  data: Product;
}

const ProductCard: FC<Props> = ({ data }) => {
  const { state, dispatch } = useAppStore();
  const { favorites } = state;

  const isAddedToFavorites = favorites.products.some(
    (product) => product.id === data.id
  );

  const handleClickAddFavorites = () => {
    dispatch(addProduct(data));
  };

  return (
    <Box
      shadow={3}
      display="flex"
      bg="white"
      justifyContent="center"
      alignItems="center"
      width="100%"
      rounded="lg"
    >
      <Box bg="white" paddingY="8">
        <Image
          size="xl"
          source={{ uri: data.image }}
          alt={data.title}
          resizeMode="contain"
        />
      </Box>
      <Divider />
      <Stack
        paddingTop="4"
        paddingX="6"
        paddingBottom="5"
        bg="white"
        display="flex"
        space={2}
      >
        <HStack display="flex" flexDirection="row" space={2}>
          <Heading size="md" color="dark.50">
            {data.title}
          </Heading>
          <Text fontSize="xl" fontWeight="bold" color="cyan.500">
            {data.price + "$"}
          </Text>
        </HStack>
        <Divider my={3} />
        <HStack display="flex" width="100%" justifyContent="space-between">
          <Button variant="outline">Details</Button>
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
            >
              Add to favorites
            </IconButton>
          )}
        </HStack>
      </Stack>
    </Box>
  );
};

export default ProductCard;
