import React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import button from "../../assets/button.png";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderFire from "../components/header/header";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <HeaderFire navigation={navigation} style={{ position: 'absolute', top: 0, }} />
      <Pressable onPress={() => navigation.navigate("Option")} style={styles.image}>
        <Image source={button} style={styles.logo} />
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    height: '100%',
    alignItems: "center",
  },
  screenText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  logo: {
    height: 400,
    width: 400,
  },
  image: {
    marginTop: 150
  },
});
