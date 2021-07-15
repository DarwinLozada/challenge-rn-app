import { RouteProp } from "@react-navigation/native";
import {
  Center,
  Image,
  Heading,
  Text,
  VStack,
  ScrollView,
  HStack,
  Badge,
} from "native-base";
import React, { FC } from "react";
import { Product } from "../../interfaces/products.interfaces";
import { StackParamList } from "../Home/Home";

type DetailsScreenRouteProp = RouteProp<StackParamList, "Details">;

interface Props {
  data: Product;
  route: DetailsScreenRouteProp;
}

const Details: FC<Props> = ({ route }) => {
  const { data } = route.params;
  return (
    <ScrollView bgColor="white" paddingTop={5}>
      <Center bgColor="white" width="100%" paddingY={5}>
        <Image
          size="2xl"
          source={{ uri: data.image }}
          alt={data.title}
          resizeMode="contain"
        />
      </Center>
      <VStack
        paddingX={6}
        width="100%"
        display="flex"
        marginTop={4}
        marginBottom={12}
        space={4}
        justifyContent="flex-start"
      >
        <Heading fontWeight="semibold">{data.title}</Heading>
        <HStack
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="3xl" fontWeight={700} color="lightBlue.600">
            {`${data.price}$`}
          </Text>
          <Badge colorScheme="info" bgColor="lightBlue.600">
            <Text fontSize="md" color="white">
              {data.category.toUpperCase()}
            </Text>
          </Badge>
        </HStack>
        <Text fontSize="lg" lineHeight="7">
          {data.description}
        </Text>
      </VStack>
    </ScrollView>
  );
};

export default Details;
