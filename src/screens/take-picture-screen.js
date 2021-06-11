
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
                    backgroundColor: '#F56552',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 200
                }}
            >
                <Text
                    style={{
                        fontSize: 25,
                        color: '#fff',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >
                    צלם תמונה
          </Text>
            </TouchableOpacity>
        </View>
    );
};

export default TakePictureScreen;


const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#282834',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});