import React, { FC } from "react";
import { View, Text } from "react-native";
import useSWRNative from "@nandorojo/swr-react-native";

const Home: FC = () => {
  const fetcher = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    return data.json();
  };

  const { data, error } = useSWRNative("productos", fetcher);
  console.log(data);

  return (
    <View>
      <Text>Buenas amigos</Text>
    </View>
  );
};

export default Home;
