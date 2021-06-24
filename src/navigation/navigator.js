import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import HeaderFire from "../components/header/header";

import BottomTabNavigator from "./footer";
import CameraScreen from "../screens/camera-screen"
import ConfirmationScreen from "../screens/confirmation-screen"

export default function Navigator() {
  return (
    <NavigationContainer>
      <HeaderFire />
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
}
