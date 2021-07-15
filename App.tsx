import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { appStore } from "./store/app.store";
import AppScreens from "./screens/AppScreens";
import theme from "./theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StoreProvider store={appStore}>
        <AppScreens />
      </StoreProvider>
    </NativeBaseProvider>
  );
}
