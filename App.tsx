import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { appStore } from "./store/app.store";
import AppScreens from "./screens/AppScreens";

export default function App() {
  return (
    <NativeBaseProvider>
      <StoreProvider store={appStore}>
        <AppScreens />
      </StoreProvider>
    </NativeBaseProvider>
  );
}
