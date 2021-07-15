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
  CloseIcon,
  Badge,
} from "native-base";
import React, { FC } from "react";
import { Product } from "../../interfaces/products.interfaces";
import { HeartOutlineIcon } from "../Icons/Icons";
import useAppStore from "../../store/app.store";
import {
  addProduct,
  removeProduct,
} from "../../store/slices/favorites/favorites.actions";
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
      duration: 2000,
      placement: "top",
    });
  };

  const handleClickRemoveFavorites = () => {
    dispatch(removeProduct(data.id));
    toast.show({
      title: `${data.title.slice(0, 16)}...`,
      description: "removed from favorites",
      status: "info",
      duration: 2000,
      placement: "top",
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
                color="lightBlue.600"
              >
                {`${data.price}$`}
              </Text>
            </VStack>
            <HStack display="flex" justifyContent="space-between">
              <Button onPress={handleClickDetails} colorScheme="lightBlue">
                <Text color="white">Details</Text>
              </Button>
              {isAddedToFavorites ? (
                <HStack display="flex" alignItems="center" space={2}>
                  <Text fontSize="md" fontWeight={500}>
                    Added
                  </Text>
                  <CheckIcon size={4} />
                </HStack>
              ) : (
                <IconButton
                  onPress={handleClickAddFavorites}
                  icon={<HeartOutlineIcon color="rose.600" />}
                />
              )}
            </HStack>
          </Stack>
        </Box>
      ) : (
        <HStack
          maxWidth="100%"
          borderRadius="lg"
          shadow={1}
          space={3}
          bgColor="white"
          paddingY={4}
          paddingLeft={2}
          alignItems="center"
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
          <VStack
            space={3}
            paddingY={2}
            bgColor="white"
            marginRight={2}
            width="48%"
          >
            <Text>
              {data.title.length > MAX_TITLE_CHARACTERS
                ? `${data.title.slice(0, MAX_TITLE_CHARACTERS)}...`
                : data.title}
            </Text>
            <Text
              fontWeight="bold"
              fontSize="xl"
              color="lightBlue.600"
            >{`${data.price} $`}</Text>
            <Badge colorScheme="info" bgColor="lightBlue.600">
              <Text fontSize="xs" color="white">
                {data.category.toUpperCase()}
              </Text>
            </Badge>
          </VStack>
          <VStack alignSelf="flex-start">
            <IconButton
              icon={<CloseIcon size={4} />}
              onPress={handleClickRemoveFavorites}
            />
          </VStack>
        </HStack>
      )}
    </>
  );
};

export default ProductCard;
