import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      ></StatusBar>
      <Routes />
    </>
  );
}
