import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { AddType } from "../components/map/map.actions"; 
import { connect } from "react-redux";


/*REDUCER-CONNECTION*/
function mapStateToProps(state) {
  return {
    type: state.map.type,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setterType: (type) => dispatch(AddType(type)),
  };
}



const OptionsScreen = ({ navigation, setterType }) => {
  const [eventType, setEventType] = useState(null);

  const setAndNavigate = (option) => {
    setterType(option);
    setEventType(option);
    navigation.navigate("Map")
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}></Text>
      <TouchableOpacity
        onPress={() => setAndNavigate('fire-urban')}
        style={styles.button}>
        <Text style={styles.text}>שריפה שטח אורבני</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setAndNavigate('fire-field')}
        style={styles.button}>
        <Text style={styles.text}> שריפה שטח פתוח</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setAndNavigate('rescue')}
        style={styles.button}>
        <Text style={styles.text}> חילוץ </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setAndNavigate('hazard')}
        style={styles.button}>
        <Text style={styles.text}> מפגע </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setAndNavigate('crash')}
        style={styles.button}>
        <Text style={styles.text}> תאונה </Text>
      </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(OptionsScreen);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    alignItems: "center",
    height: "100%",
  },
  screenText: {
    marginTop: 100,
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
  button: {
    width: '80%',
    height: '9%',
    backgroundColor: '#F56552',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: '8%',
    borderColor: 'white',
    borderWidth: 2,
  },
  text: {
    paddingTop: '6%',
    fontWeight: 'bold',
    fontSize: 22,
    color: "#fff"
  },
});
