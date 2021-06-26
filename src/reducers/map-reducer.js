import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const initState = {
  marker: {
    key: "-1",
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    displayName: "none",
  },
  currentLocationFlag: false,
  counter: 1,
  markerFlag: false,
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: (0.01 * width) / height,
  },
  type: "none",
  photoUrl: "none"
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
      return {
        ...state,
        marker: {
          key: "-1",
          coordinate: { latitude: 37.78825, longitude: -122.4324 },
          displayName: "none",
        },
        counter: 1,
        markerFlag: false,
      };

    case "ADD_MARKER":
      return {
        ...state,
        marker: action.payload,
        counter: state.counter + 1,
        markerFlag: true,
      };

    case "ADD_TYPE":
      return {
        ...state,
        type: action.payload,
      };

    case "ADD_PHOTO":
      return {
        ...state,
        photoUrl: action.payload,
      }
        ;
    default:
      return state;
  }
};

export default MapReducer;
