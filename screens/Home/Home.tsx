import React, { FC } from "react";
import { useTheme } from "native-base";
import Feed from "../Feed";
import { Product } from "../../interfaces/products.interfaces";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../Details";

export type StackParamList = {
  Feed: undefined;
  Details: { data: Product };
};

const Home: FC = () => {
  const theme = useTheme();
  const Stack = createStackNavigator<StackParamList>();

  return (
    <Stack.Navigator initialRouteName="Feed" screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.red["600"],
        
      }

    }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Product details",
          headerStyle: {
            backgroundColor: theme.colors.lightBlue["600"],
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
};

export default Home;
