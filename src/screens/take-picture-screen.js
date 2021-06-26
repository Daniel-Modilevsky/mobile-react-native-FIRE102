import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const TakePictureScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Camera")}
        style={{
          width: 200,
          borderRadius: 100,
          backgroundColor: "#F56552",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          צלם תמונה
        </Text>
      </TouchableOpacity>
      <View style={styles.headLine}>
          <Text style={styles.textHeadline}> צילום האירוע</Text>
      </View>
    </View>
  );
};

export default TakePictureScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headLine: {
    backgroundColor: "rgba(70,130,180,0.7)",
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    width: 400,
    position: "absolute",
    top: 50,
  },
  textHeadline: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    width: 400,
  },
});
