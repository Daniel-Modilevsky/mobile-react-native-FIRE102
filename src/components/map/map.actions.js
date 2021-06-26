import store from "../../reducers/store";

/**
 * Change The current location of the screen
 *
 * @param location:object
 * @return {dispatch} Type + payload.
 */
export function SetLocation(region) {
  return { type: "SET_LOCATION", payload: { region } };
}

/**
 * Clear all the markers from the map
 *
 * @return {dispatch} Type + payload.
 */
export function ClearMarkers() {
  return { type: "CLEAR_MARKERS", payload: {} };
}

/**
 * Insert new maker to the maker array
 *
 * @param maker:object
 * @return {dispatch} Type + payload.
 */
export function AddMarker(marker) {
  return { type: "ADD_MARKER", payload: marker };
}


/**
 * Insert type to correct report
 *
 * @param type:string
 * @return {dispatch} Type + payload.
 */
export function AddType(type) {
  return { type: "ADD_TYPE", payload: type };
}

/**
 * Insert photo to correct report
 *
 * @param photo:string (in base64)
 * @return {dispatch} Type + payload.
 */
export function AddPhoto(photo) {
  return { type: "ADD_PHOTO", payload: photo };
}

/**
 * Clear Report from state
 *
 * @return {dispatch} Type + payload.
 */
export function ClearReport() {
  return { type: "CLEAR_REPORT", payload: {} };
}
