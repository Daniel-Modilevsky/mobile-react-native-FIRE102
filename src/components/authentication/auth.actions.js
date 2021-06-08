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
    const email = await AsyncStorage.getItem("email");
    const password = await AsyncStorage.getItem("password");
    const phoneNumber = await AsyncStorage.getItem("phoneNumber");
    const identityNumer = await AsyncStorage.getItem("identityNumer");
    dispatch({
      type: "LOGIN",
      payload: { userName, email, password, phoneNumber, identityNumer },
    });
  } catch (error) {
    console.log(error);
  }
}
