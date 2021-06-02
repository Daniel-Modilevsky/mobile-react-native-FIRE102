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
  return { type: "CLEAR_MARKERS", payload: [] };
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
