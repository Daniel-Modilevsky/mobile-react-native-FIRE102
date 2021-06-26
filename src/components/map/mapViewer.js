import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import MapView, { Marker, ProviderPropType } from "react-native-maps";
import * as Location from "expo-location";

import loader from "../../../assets/loader1.gif";
import myLocation from "../../../assets/myLocation.png";
import fire from "../../../assets/fire.png";
import rescue from "../../../assets/rescue.png";
import acident from "../../../assets/acident.png";
import WarningIcon from "../../../assets/alerticon2.png";

import { Button } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons'
import { SetLocation, ClearMarkers, AddMarker } from "./map.actions";



const { width, height } = Dimensions.get("window");
const LONGITUDE_DELTA = (0.01 * width) / height;

/*REDUCER-CONNECTION*/
function mapStateToProps(state) {
  return {
    marker: state.map.marker,
    currentLocationFlag: state.map.currentLocationFlag,
    region: state.map.region,
    counter: state.map.counter,
    markerFlag: state.map.markerFlag,
    type: state.map.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setterCleanMarkers: () => dispatch(ClearMarkers()),
    setterMarker: (marker) => dispatch(AddMarker(marker)),
    setterLocation: (rigion) => dispatch(SetLocation(rigion)),
  };
}

const MapViewer = ({
  navigation,
  provider,
  setterCleanMarkers,
  setterMarker,
  setterLocation,
  currentLocationFlag,
  region,
  marker,
  markerFlag,
  counter,
  type
}) => {

  const [imageIcon, setImageIcon] = useState(null);

  useEffect(() => {
    customImage();
  }, []);

  
  /*EVENTS-HANDLER*/
  /**
   * Clear Markers & Hide continue buttons till put 1 coordinate
   *
   * @return Void
   */
  const clearMarkers = () => {
    setterCleanMarkers();
  };

  const customImage = () => {
    switch (type) {
      case "fire-urban" :
        setImageIcon(fire);
        break;

      case "fire-field":
        setImageIcon(fire);
        break;

      case "rescue":
        setImageIcon(rescue);
        break;

      case "crash":
        setImageIcon(acident);
        break;

      default:
        setImageIcon(WarningIcon);
        break;
    }
  };



  /**
   * Create new marker from user press on the map
   * @param Coordinate: object
   * @return marker
   */
  const generateMarkers = (Coordinate) => {
    const { latitude, longitude } = Coordinate;
    const newMarker = {
      key: `${1 + counter} דיווח`,
      coordinate: {
        latitude: latitude,
        longitude: longitude,
      },
      displayName: "",
    };

    Location.reverseGeocodeAsync({
      latitude: newMarker.coordinate.latitude,
      longitude: newMarker.coordinate.longitude,
    }).then((displayNmae) => {
      newMarker.displayName =
        displayNmae[0].street +
        " , " +
        displayNmae[0].name +
        " , " +
        displayNmae[0].city +
        " , " +
        displayNmae[0].region +
        " , " +
        displayNmae[0].country;
    });
    return newMarker;
  };
  const onMapPress = (e) => {
    const newMarker = generateMarkers(e.nativeEvent.coordinate);
    setterMarker(newMarker);
  };

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={region}
          onPress={onMapPress}
          provider={provider}
          style={styles.map}
          customMapStyle={customStyle}
        >
          {currentLocationFlag && (
            <Marker
              title={marker.key}
              image={imageIcon}
              coordinate={marker.coordinate}
              key={marker.key}
            />
          )}
          <Marker
              title={'המיקום שלי'}
              image={myLocation}
              coordinate={{latitude:region.latitude, longitude:region.longitude}}
              key={'myLocation'}
            />
        </MapView>
        <View style={styles.headLine}>
        <Pressable style={styles.back}>
          <Button   type="outline" onPress={() => navigation.navigate("Option")}
            icon={ <FontAwesome5 name="arrow-right" size={15} color="#fff"/>}
          />
        </Pressable>
        <Text style={styles.textHeadline}> איפה האירוע?</Text>
        <Text style={styles.leftText}>2/5</Text>
      </View>
        {markerFlag && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => clearMarkers()}
              style={styles.bubble}
            >
              <Text>מחיקת סימונים</Text>
            </TouchableOpacity>
            <Pressable
              onPress={() => navigation.navigate("Camera")}
              style={styles.bubble2}
            >
              <Text>שמירת סימון</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
};

MapViewer.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loaderBack: {
    backgroundColor: "#282834",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  headLine: {
    backgroundColor: "rgba(70,130,180,0.7)",
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    width: 400,
    position: "absolute",
    top: 50,
  },
  textHeadline: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    width: 300,
  },
  back:{
    marginLeft: 15
  },
  leftText:{
    color: "yellow",
    fontSize: 20,
    fontWeight: "700",
  },
  bubble: {
    backgroundColor: "rgba(168,183,255,0.7)",
    color: "rgb(255,255,255)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    margin: 3,
  },
  bubble2: {
    backgroundColor: "rgba(168,63,255,0.7)",
    color: "rgb(255,255,255)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    margin: 3,
  },
  latlng: {
    width: 200,
    alignItems: "stretch",
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
});

const customStyle = [
  {
    elementType: "geometry",
  },
  {
    elementType: "labels.text.fill",
  },
  {
    elementType: "labels.text.stroke",
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
  },
  {
    featureType: "road",
    elementType: "geometry",
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
  },
  {
    featureType: "transit",
    elementType: "geometry",
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
  },
  {
    featureType: "water",
    elementType: "geometry",
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
  },
];

export default connect(mapStateToProps, mapDispatchToProps)(MapViewer);
