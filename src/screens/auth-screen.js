import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import logo from "../../assets/firelogo.jpg";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import validator from "validator";
import { connect } from "react-redux";
import { login, register } from "../components/authentication/auth.actions";

/*REDUCER-CONNECTION*/
function mapStateToProps(state) {
  return {
    userName: state.user.userName,
    password: state.user.password,
    email: state.user.email,
    phoneNumber: state.user.phoneNumber,
    identityNumer: state.user.identityNumer,

    validationfalg: state.user.validationfalg,
    inVallidMessage: state.user.inVallidMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setterRegister: (userName, email, password, phoneNumber, identityNumer) =>
      dispatch(register(userName, email, password, phoneNumber, identityNumer)),
    setterLogin: () => login(dispatch),
  };
}

const AuthScreen = ({
  navigation,
  userName,
  password,
  email,
  phoneNumber,
  identityNumer,
  inVallidMessage,
  validationfalg,
  setterRegister,
  setterLogin,
}) => {
  const [currentUserName, setUserName] = useState(userName);
  const [currentPassword, setPassword] = useState(password);
  const [currentEmail, setEmail] = useState(email);
  const [currentPhoneNumber, setPhoneNumber] = useState(phoneNumber);
  const [currentIdentityNumer, setIdentityNumer] = useState(identityNumer);
  const [currentInVallidMessage, setInVallidMessage] = useState(inVallidMessage);

  useEffect(() => {
    loadUser();
  }, []);

  /*EVENT-HANDLERS*/
  const submitHandler = () => {
    (currentUserName === "none" ||
    currentEmail === "none" ||
    currentPhoneNumber === "none" ||
    currentPassword === "none" ||
    currentIdentityNumer === "none")? setInVallidMessage("נא למלא את כל הטופס, חסרים פרטים"): {};
    validator.isMobilePhone(currentPhoneNumber)? {} : setInVallidMessage("מספר הטלפון לא תקין");
    validator.isEmail(currentEmail) ? {} : setInVallidMessage("מייל לא תקין");
    validator.isDecimal(currentIdentityNumer)? {} : setInVallidMessage("מספר ת.ז לא תקין");

    if (
      currentUserName !== "none" &&
      currentEmail !== "none" &&
      currentPhoneNumber !== "none" &&
      currentPassword !== "none" &&
      currentIdentityNumer !== "none" &&
      validator.isMobilePhone(currentPhoneNumber) &&
      validator.isEmail(currentEmail) &&
      validator.isDecimal(currentIdentityNumer)
    ) {
      console.log(currentUserName , currentEmail, currentPhoneNumber, currentPassword, currentIdentityNumer);
      saveUser();
      navigation.navigate("Home");
    }
  };

  const saveUser = async () => {
    try {
      await AsyncStorage.setItem("userName", userName);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
      await AsyncStorage.setItem("phoneNumber", phoneNumber);
      await AsyncStorage.setItem("identityNumer", identityNumer);
      setterRegister(userName, email, password, phoneNumber, identityNumer);
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async () => {
    try {
      const me = await AsyncStorage.getItem("userName");
      if (me !== null) {
        setterLogin();
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.screen}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.screenText}>רישום למערכת</Text>
      {validationfalg && (
        <Text style={styles.errorMsg}>{currentInVallidMessage}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="שם מלא..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="סיסמה..."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="תעודת זהות..."
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          onChangeText={(text) => setIdentityNumer(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="אימייל..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="טלפון..."
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => submitHandler()}>
        <Text style={styles.loginText}>הירשם</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default AuthScreen;
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  logo: {
    height: 180,
    width: 180,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  errorMsg: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
  },
});
