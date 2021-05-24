import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/home-screen';
import MapScreen from '../screens/map-screen';
import OptionsScreen from '../screens/options-screen';
import CameraScreen from '../screens/camera-screen';
import ReportScreen from '../screens/report-screen';

const BottomTab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  
    return (
        <BottomTab.Navigator  style={styles.footer}>
            <BottomTab.Screen name="Home" component={HomeScreen}  options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />),}}/>

            <BottomTab.Screen name="Map" component={MapScreen} options={{ tabBarLabel: 'Map', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />),}}/>

            <BottomTab.Screen name="Options" component={OptionsScreen} options={{ tabBarLabel: 'Options', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />),}}/>

            <BottomTab.Screen name="Camera" component={CameraScreen} options={{ tabBarLabel: 'Camera', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />),}}/>

            <BottomTab.Screen name="Report" component={ReportScreen} options={{ tabBarLabel: 'Report', tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="note" color={color} size={size} />),}}/>

        </BottomTab.Navigator>
    );
  };
  
  export default BottomTabNavigator;
  
  const styles = StyleSheet.create({
    footer:{
      backgroundColor: 'green',
    },
  });
  