import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Product } from "../../interfaces/products.interfaces";
import Home from "../Home";
import Favorites from "../Favorites";

export type RootTabParamList = {
  Home: undefined;
  Favorites: { data: Product };
};

const AppWrapper: FC = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
