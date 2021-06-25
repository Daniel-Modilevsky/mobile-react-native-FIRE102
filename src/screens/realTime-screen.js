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

import WarningIcon from "../../assets/alerticon2.png";
import loader from "../../assets/loader1.gif";
import HeaderFire from "../components/header/header";


const { width, height } = Dimensions.get("window");
const LONGITUDE_DELTA = (0.01 * width) / height;



const RealTimeScreen = ({ provider, navigation}) => {
  const [markers , setMarkers] = useState([]);
  const [countMarkers , setCountMarkers] = useState(0);
  const [errorMsg , setErrorMsg] = useState('none');
  const [location , setterLocation] = useState({});
  const [currentLocationFlag  ,setCurrentLocationFlag ] = useState(false);

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
        console.log("region");
        console.log(region);
        setterLocation(region);
        setCurrentLocationFlag(false);
        console.log("currentLocationFlag");
        console.log(currentLocationFlag);
      });

      //fetch get all markers
      await fetch('https://fire102.herokuapp.com/api/markers')
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        setMarkers(json);
        setCountMarkers(json.length);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      });
    })();

    
  }, []);


  if (!currentLocationFlag) {
    return (
      <View style={styles.container}>
        <HeaderFire navigation={navigation} style={styles.header}/>
        <MapView
          initialRegion={location}
          provider={provider}
          style={styles.map}
          customMapStyle={customStyle}
        >
          {countMarkers > 0 && markers.map(marker =>  
             <Marker
              title={marker.key}
              image={WarningIcon}
              coordinate={marker.coordinate}
              key={marker.key}
            />
          )}
        </MapView>
        <View style={styles.headLine}>
          <Text style={styles.textHeadline}>מפת הדיווחים</Text>
          <Text> {countMarkers} דיווחים</Text>
        </View>
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

export default RealTimeScreen;

RealTimeScreen.propTypes = {
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
    zIndex: 900,
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
  header:{
    position:'absolute',
    marginBottom: 500,
    zIndex: 1000,
    marginTop: 200,
  }
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

