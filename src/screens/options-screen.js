import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const OptionsScreen = ({ navigation }) => {
  const [eventType, setEventType] = useState(null);

  const setAndNavigate = (option) => {
    setEventType(option);
    navigation.navigate("Map")
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.screenText}>אנא בחר את סוג האירוע</Text>
      <TouchableOpacity
        onPress={() => setAndNavigate('fire')}
        style={styles.button}>
        <Text style={styles.text}> שריפה </Text>
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
      <TouchableOpacity
        onPress={() => setAndNavigate('cat')}
        style={styles.button}>
        <Text style={styles.text}> חתול על עץ </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionsScreen;

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
  button: {
    width: '80%',
    height: '10%',
    backgroundColor: '#F56552',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: '5%',
    borderColor: 'white',
    borderWidth: 5,
  },
  text: {
    paddingTop: '3%',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
