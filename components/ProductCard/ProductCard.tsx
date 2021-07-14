import {
  Box,
  Text,
  Image,
  Heading,
  Stack,
  HStack,
  Button,
  CheckIcon,
  IconButton,
  VStack,
  useToast,
} from "native-base";
import React, { FC } from "react";
import { Product } from "../../interfaces/products.interfaces";
import { HeartIcon } from "../Icons/Icons";
import useAppStore from "../../store/app.store";
import { addProduct } from "../../store/slices/favorites/favorites.actions";
import { useNavigation } from "@react-navigation/native";

interface Props {
  data: Product;
  type: "feed" | "favorites";
}

const MAX_TITLE_CHARACTERS = 50;

const ProductCard: FC<Props> = ({ data, type }) => {
  const navigation = useNavigation();
  const { state, dispatch } = useAppStore();
  const { favorites } = state;
  const toast = useToast();

  const isAddedToFavorites = favorites.products.some(
    (product) => product.id === data.id
  );

  const handleClickAddFavorites = () => {
    dispatch(addProduct(data));
    toast.show({
      title: `${data.title.slice(0, 16)}...`,
      description: "added to favorites",
      status: "success",
      duration: 3000,
    });
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
    <>
      {type === "feed" ? (
        <Box
          shadow={2}
          display="flex"
          bg="white"
          justifyContent="center"
          alignItems="center"
          rounded="lg"
          width="100%"
        >
          <Box bg="white" paddingTop={8} paddingBottom={8}>
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
                {data.title.length > MAX_TITLE_CHARACTERS
                  ? `${data.title.slice(0, MAX_TITLE_CHARACTERS)}...`
                  : data.title}
              </Heading>
              <Text
                fontSize="xl"
                fontWeight="bold"
                marginY={2}
                color="cyan.500"
              >
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
      ) : (
        <HStack
          width="100%"
          borderRadius="lg"
          shadow={1}
          space={2}
          bgColor="white"
          paddingY={2}
          overflow="hidden"
        >
          <Box padding={1}>
            <Image
              size="lg"
              source={{ uri: data.image }}
              alt={data.title}
              resizeMode="contain"
            />
          </Box>
          <VStack space={1} paddingY={2} bgColor="white" marginRight={2}>
            <Text w="70%">
              {data.title.length > MAX_TITLE_CHARACTERS
                ? `${data.title.slice(0, MAX_TITLE_CHARACTERS)}...`
                : data.title}
            </Text>
            <Text>{data.price}</Text>
            <Text>{data.category}</Text>
          </VStack>
        </HStack>
      )}
    </>
  );
};

export default ProductCard;
