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
    <>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerStyle: { backgroundColor: theme.colors.cyan["200"] },
          }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </>
  );
};

export default Home;
