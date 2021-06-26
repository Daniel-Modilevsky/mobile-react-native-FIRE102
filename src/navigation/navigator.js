import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import HeaderFire from "../components/header/header";

import BottomTabNavigator from "./footer";

import { createDrawerNavigator } from '@react-navigation/drawer';
import ConfirmationScreen from "../screens/confirmation-screen"

import HomeScreen from "../screens/home-screen";
import MapScreen from "../screens/map-screen";
import OptionsScreen from "../screens/options-screen";
import RealTimeScreen from "../screens/realTime-screen";
import TakePictureScreen from "../screens/take-picture-screen";
import CameraScreen from "../screens/camera-screen";
import ReportScreen from "../screens/report-screen";
import AuthScreen from "../screens/auth-screen";


import SliderMenu from "../components/header/slidebar";


export default function Navigator() {

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={props => <SliderMenu {...props} />}  initialRouteName="Auth" drawerStyle={{
        backgroundColor: '#fff',
        width: 240,
      }}>
        <Drawer.Screen name="Option" component={OptionsScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Real" component={RealTimeScreen} />
        <Drawer.Screen name="Map" component={MapScreen} />
        <Drawer.Screen name="Auth" component={AuthScreen} />
        <Drawer.Screen name="Camera" component={CameraScreen} />
        <Drawer.Screen name="Report" component={ReportScreen} />
        <Drawer.Screen name="Pic" component={TakePictureScreen} />
        <Drawer.Screen name="Confirmation" component={ConfirmationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
