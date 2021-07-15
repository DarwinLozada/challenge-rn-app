import React, { FC } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Product } from "../../interfaces/products.interfaces";
import Home from "../Home";
import Favorites from "../Favorites";
import {
  HeartIcon,
  HeartOutlineIcon,
  HomeIcon,
  HomeOutlineIcon,
} from "../../components/Icons/Icons";
import { Text } from "native-base";
import useAppStore from "../../store/app.store";

export type RootTabParamList = {
  Home: undefined;
  Favorites: { data: Product };
};

const AppWrapper: FC = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();

  const { products } = useAppStore().state.favorites;

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "lightBlue.600",
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 2,
            height: 56,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({ color }) => {
              return (
                <Text fontSize="sm" color={color}>
                  Home
                </Text>
              );
            },
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? (
                <HomeIcon color={color} size={size} />
              ) : (
                <HomeOutlineIcon color={color} size={size} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: ({ color }) => {
              return (
                <Text fontSize="sm" color={color}>
                  Favorites
                </Text>
              );
            },
            tabBarBadge: products.length > 0 ? products.length : undefined,
            tabBarIcon: ({ focused, color, size }) => {
              return focused ? (
                <HeartIcon color={color} size={size} />
              ) : (
                <HeartOutlineIcon color={color} size={size} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
