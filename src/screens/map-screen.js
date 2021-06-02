import React from "react";
import { StyleSheet, View } from "react-native";
import MapViewer from "../components/map/mapViewer";

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <MapViewer navigation={navigation} />
    </View>
  );
};

export default MapScreen;

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
