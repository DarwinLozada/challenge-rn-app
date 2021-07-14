import { RouteProp } from "@react-navigation/native";
import { Center, Image, Heading, Text, VStack, ScrollView } from "native-base";
import React, { FC } from "react";
import { RootStackParamList } from "../../App";
import { Product } from "../../interfaces/products.interfaces";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

interface Props {
  data: Product;
  route: DetailsScreenRouteProp;
}

const Details: FC<Props> = ({ route }) => {
  const { data } = route.params;
  return (
    <ScrollView bgColor="white">
      <Center bgColor="white" width="100%" paddingY={5}>
        <Image
          size="2xl"
          source={{ uri: data.image }}
          alt={data.title}
          resizeMode="contain"
        />
      </Center>
      <VStack
        paddingX={4}
        width="100%"
        display="flex"
        marginTop={4}
        marginBottom={12}
        space={4}
        justifyContent="flex-start"
      >
        <Heading fontWeight="semibold">{data.title}</Heading>
        <Text fontSize="3xl" fontWeight={600} color="cyan.500">
          {`${data.price}$`}
        </Text>
        <Text fontSize="lg" lineHeight="7">
          {data.description}
        </Text>
      </VStack>
    </ScrollView>
  );
};

export default Details;
