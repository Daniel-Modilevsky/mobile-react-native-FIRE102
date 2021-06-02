import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const initState = {
  markers: [],
  currentLocationFlag: false,
  counter: 1,
  markerFlag: false,
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: (0.01 * width) / height,
  },
};

const MapReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return {
        ...state,
        region: action.payload.region,
        currentLocationFlag: true,
      };

    case "CLEAR_MARKERS":
      return { ...state, markers: [], counter: 1, markerFlag: false };

    case "ADD_MARKER":
      return {
        ...state,
        markers: [...state.markers, action.payload],
        counter: state.counter + 1,
        markerFlag: true,
      };

    default:
      return state;
  }
};

export default MapReducer;