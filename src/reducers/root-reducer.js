import { combineReducers } from "redux";
import MapReducer from "./map-reducer";
import AuthReducer from "./auth-reducer";

const RootReducer = combineReducers({
  map: MapReducer,
  user: AuthReducer,
});

export default RootReducer;
