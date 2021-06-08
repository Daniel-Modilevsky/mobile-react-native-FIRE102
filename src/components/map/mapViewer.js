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

import WarningIcon from "../../../assets/alerticon2.png";
import loader from "../../../assets/loader1.gif";
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
}) => {
  useEffect(() => {
    /*GET PREMITIONS FOR USING CURRENT LOCATION */
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      /*GET CURRENT LOCATION */
      await Location.getCurrentPositionAsync({}).then((location) => {
        // setCurrentLocationFlag(true);
        const region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: LONGITUDE_DELTA,
        };
        setterLocation(region);
        Location.reverseGeocodeAsync({
          latitude: region.latitude,
          longitude: region.longitude,
        }).then((displayNmae) => {
          fullDisplayName =
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
      });
    })();
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
      latitude: marker.coordinate.latitude,
      longitude: marker.coordinate.longitude,
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

  if (currentLocationFlag) {
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
              image={WarningIcon}
              coordinate={marker.coordinate}
              key={marker.key}
            />
          )}
        </MapView>
        <View style={styles.headLine}>
          <Text style={styles.textHeadline}>איפה האירוע?</Text>
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
              onPress={() => navigation.navigate("Options")}
              style={styles.bubble2}
            >
              <Text>שמירת סימון</Text>
            </Pressable>
          </View>
        )}
      </View>
    );
  } else {
    return (
      <View style={styles.loaderBack}>
        <Image source={loader} style={styles.loader} />
      </View>
    );
  }
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
    backgroundColor: "rgba(102,0,0,0.7)",
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
    width: 400,
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
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];

export default connect(mapStateToProps, mapDispatchToProps)(MapViewer);
