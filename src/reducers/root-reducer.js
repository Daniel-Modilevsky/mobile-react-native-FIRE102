import { combineReducers } from "redux";
import MapReducer from "./map-reducer";

const RootReducer = combineReducers({
  map: MapReducer,
});

export default RootReducer;
