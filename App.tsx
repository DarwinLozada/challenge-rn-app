import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import { appStore } from "./store/app.store";
import Details from "./screens/Details/Details";
import { Product } from "./interfaces/products.interfaces";

export type RootStackParamList = {
  Home: undefined;
  Details: { data: Product };
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StoreProvider store={appStore}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </StoreProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
