import { NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { favoritesStore } from "./stores/favorites-store/favorites.store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StoreProvider store={favoritesStore}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </StoreProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
