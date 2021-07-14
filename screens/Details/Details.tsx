import { Center, ScrollView, Heading } from "native-base";
import React, { FC } from "react";
import { Product } from "../../interfaces/products.interfaces";

interface Props {
  data: Product;
}

const Details: FC<Props> = ({ data }) => {
  return (
    <Center>
      <ScrollView>
        <Heading>{data.title}</Heading>
      </ScrollView>
    </Center>
  );
};

export default Details;
