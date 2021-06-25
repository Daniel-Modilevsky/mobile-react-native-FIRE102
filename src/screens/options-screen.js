import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import logo from "../../assets/firelogo.jpg";
import HeaderFire from "../components/header/header";
import { Button } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

const OptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>OptionsScreen</Text>
      <Pressable onPress={() => navigation.navigate("Map")}>
        <Image source={logo} style={styles.logo} />
      </Pressable>
      <View style={styles.headLine}>
        <Pressable style={styles.back}>
          <Button
            type="outline"
            onPress={() => navigation.navigate("Home")}
            icon={<FontAwesome5 name="arrow-right" size={15} color="#fff" />}
          />
        </Pressable>
        <Text style={styles.textHeadline}> סוג האירוע</Text>
        <Text style={styles.leftText}>1/5</Text>
      </View>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    alignItems: "center",
    height: "100%",
  },
  screenText: {
    marginTop: 300,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  logo: {
    height: 200,
    width: 200,
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
    width: 300,
  },
  back: {
    marginLeft: 15,
  },
  leftText: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "700",
  },
});
