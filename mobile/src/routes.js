import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import List from "./pages/List";
import Book from "./pages/Book";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>

        <Stack.Screen name="List" component={List}></Stack.Screen>

        <Stack.Screen name="Book" component={Book}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
