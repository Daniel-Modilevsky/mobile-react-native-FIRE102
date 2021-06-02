import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const HeaderFire = () => {
  return (
    <View>
      <Header
        style={styles.header}
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Fire - 102", style: styles.centerComponent }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    </View>
  );
};

export default HeaderFire;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
  },
  centerComponent: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
