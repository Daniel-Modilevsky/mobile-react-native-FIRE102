import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../../assets/firelogo.jpg";

const ReportScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>ReportScreen</Text>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default ReportScreen;

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
    height: 200,
    width: 200,
  },
});
