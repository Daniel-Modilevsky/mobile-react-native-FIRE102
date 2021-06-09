const initState = {
  userName: "none",
  password: "none",
  email: "none",
  phoneNumber: "none",
  identityNumer: "none",
  validationfalg: true,
  inVallidMessage: "",
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        identityNumer: action.payload.identityNumer,
      };

    case "LOGIN":
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        identityNumer: action.payload.identityNumer,
      };

    default:
      return state;
  }
};

export default AuthReducer;
