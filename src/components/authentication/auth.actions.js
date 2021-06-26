import store from "../../reducers/store";
import { AsyncStorage } from "react-native";

/**
 * Save user details from register form after validation
 *
 * @param userName:string
 * @param email:string
 * @param password:string
 * @param phoneNumber:string
 * @param identityNumer:string
 * @return {dispatch} Type + payload.
 */
export function register(
  userName,
  email,
  password,
  phoneNumber,
  identityNumer
) {
  const params = {
    userName: userName,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    identityNumer: identityNumer
  }
  fetch('https://fire102.herokuapp.com/api/signup',{
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      });

  return {
    type: "REGISTER",
    payload: { userName, email, password, phoneNumber, identityNumer },
  };
}

/**
 * If user already registred - get from the phone storage his/her details
 * @return {dispatch} Type + payload.
 */
export async function login(dispatch) {
  try {
    const userName = await AsyncStorage.getItem("userName");
    const password = await AsyncStorage.getItem("password");
    const email = await AsyncStorage.getItem("email");
    const phoneNumber = await AsyncStorage.getItem("phoneNumber");
    const identityNumer = await AsyncStorage.getItem("identityNumer");

    const params = {
      userName: userName,
      password: password,
    }
    fetch('https://fire102.herokuapp.com/api/login',{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (user) {
          console.log(user);
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " + error.message
          );
          throw error;
        });
    dispatch({
      type: "LOGIN",
      payload: { userName, email, password, phoneNumber, identityNumer },
    });
  } catch (error) {
    console.log(error);
  }
}
