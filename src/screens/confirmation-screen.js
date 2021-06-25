import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ConfirmationScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>הדיווח הועבר בהצלחה</Text>
            <Text style={styles.screenText}>תודה</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.button}>
                <Text style={styles.text}> אישור </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmationScreen;

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
