import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Buenas amigos</Text>
        <StatusBar style="auto" />
        <Button>Hola</Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
