import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { ClearReport } from '../components/map/map.actions';

/*REDUCER-CONNECTION*/

  function mapDispatchToProps(dispatch) {
    return {
      setterReport: () => dispatch(ClearReport()),
    };
  }


const ConfirmationScreen = ({ navigation, setterReport }) => {

    const cleanMap = () => {
        setterReport();
        navigation.navigate("Home");
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>הדיווח הועבר בהצלחה</Text>
            <Text style={styles.screenText}>תודה</Text>
            <TouchableOpacity
                onPress={() => cleanMap()}
                style={styles.button}>
                <Text style={styles.text}> אישור </Text>
            </TouchableOpacity>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(ConfirmationScreen)



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
