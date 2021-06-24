import React from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import button from "../../assets/button.png";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Pressable onPress={() => navigation.navigate("Options")}>
        <Image source={button} style={styles.logo} />
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    flex: 1,
    justifyContent: "center",
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
});
