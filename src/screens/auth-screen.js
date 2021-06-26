import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,

} from "react-native";
import logo from "../../assets/firelogo.jpg";
import validator from "validator";
import { connect } from "react-redux";
import { login, register } from "../components/authentication/auth.actions";
import { SetLocation } from "../components/map/map.actions";

import HeaderFire from "../components/header/header";
import loader from "../../assets/loader1.gif";

import * as Location from "expo-location";
const { width, height } = Dimensions.get("window");
const LONGITUDE_DELTA = (0.01 * width) / height;


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
    setterLocation: (rigion) => dispatch(SetLocation(rigion)),
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
  setterLocation
}) => {
  const [currentUserName, setUserName] = useState(userName);
  const [currentPassword, setPassword] = useState(password);
  const [currentEmail, setEmail] = useState(email);
  const [currentPhoneNumber, setPhoneNumber] = useState(phoneNumber);
  const [currentIdentityNumer, setIdentityNumer] = useState(identityNumer);
  const [currentInVallidMessage, setInVallidMessage] = useState(
    inVallidMessage
  );
  const [flagLoader, setFlagLoader] = useState(true);

  const [errorMsg, setErrorMsg] = useState("none");
  // const [myLocation, setterLocation] = useState({});

  useEffect(() => {
    setMyLocation();
    loadUser();
    setFlagLoader(false);
  }, []);

  const setMyLocation = () => {
    /*GET PREMITIONS FOR USING CURRENT LOCATION */
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      /*GET CURRENT LOCATION */
      await Location.getCurrentPositionAsync({}).then((location) => {
        const region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: LONGITUDE_DELTA,
        };
        setterLocation(region);
      });
    })();
  };

  /*EVENT-HANDLERS*/
  const submitHandler = () => {
    currentUserName === "none" ||
      currentEmail === "none" ||
      currentPhoneNumber === "none" ||
      currentPassword === "none" ||
      currentIdentityNumer === "none"
      ? setInVallidMessage("נא למלא את כל הטופס, חסרים פרטים")
      : {};
    validator.isMobilePhone(currentPhoneNumber)
      ? {}
      : setInVallidMessage("מספר הטלפון לא תקין");
    validator.isEmail(currentEmail) ? {} : setInVallidMessage("מייל לא תקין");
    validator.isDecimal(currentIdentityNumer)
      ? {}
      : setInVallidMessage("מספר ת.ז לא תקין");

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
      console.log(
        currentUserName,
        currentEmail,
        currentPhoneNumber,
        currentPassword,
        currentIdentityNumer
      );
      saveUser();
      navigation.navigate("Home");
    }
  };

  const saveUser = async () => {
    try {
      await AsyncStorage.setItem("userName", currentUserName);
      await AsyncStorage.setItem("email", currentEmail);
      await AsyncStorage.setItem("password", currentPassword);
      await AsyncStorage.setItem("phoneNumber", currentPhoneNumber);
      await AsyncStorage.setItem("identityNumer", currentIdentityNumer);
      setterRegister(
        currentUserName,
        currentEmail,
        currentPassword,
        currentPhoneNumber,
        currentIdentityNumer
      );
    } catch (error) {
      console.log(error);
    }
  };

  const loadUser = async () => {
    try {
      const me = await AsyncStorage.getItem("userName");
      // setFlagLoader(false);
      if (me !== null) {
        setterLogin();
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (flagLoader) {
    return (
      <View style={styles.loaderBack}>
        <Image source={loader} style={styles.loader} />
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <HeaderFire
          navigation={navigation}
          style={{ position: "absolute", top: 0 }}
        />
        <Image source={logo} style={styles.logo} />
        <Text style={styles.screenText}>רישום למערכת</Text>
        {validationfalg && (
          <Text style={styles.errorMsg}>{currentInVallidMessage}</Text>
        )}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="שם מלא..."
            placeholderTextColor="#fff5be"
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="סיסמה..."
            placeholderTextColor="#fff5be"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="תעודת זהות..."
            placeholderTextColor="#fff5be"
            keyboardType="numeric"
            onChangeText={(text) => setIdentityNumer(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="אימייל..."
            placeholderTextColor="#fff5be"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="טלפון..."
            placeholderTextColor="#fff5be"
            keyboardType="numeric"
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => submitHandler()}
        >
          <Text style={styles.loginText}>הירשם</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

// export default AuthScreen;
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    alignItems: "center",
    height: "100%",
  },
  screenText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    height: '15%',
    width: '15%',
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
