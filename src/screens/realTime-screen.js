import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Pressable } from "react-native";
import MapView, { Marker, ProviderPropType } from "react-native-maps";
import WarningIcon from "../../assets/alerticon2.png";
import HeaderFire from "../components/header/header";
import my from "../../assets/myLocation.png";
import { Button } from "react-native-elements";

/*REDUCER-CONNECTION*/
function mapStateToProps(state) {
  return {
    myLocation: state.map.region,
  };
}

const RealTimeScreen = ({ provider, navigation, myLocation }) => {
  const [markers, setMarkers] = useState([]);
  const [countMarkers, setCountMarkers] = useState(0);

  useEffect(() => {
    getMarkers();
  }, []);

  const getMarkers = async () => {
    //fetch get all markers
    await fetch("https://fire102.herokuapp.com/api/markers")
      .then(function (response) {
        return response.json();
      })
      .then(function (recivedMarkers) {
        console.log(recivedMarkers[0].coordinate.latitude);
        console.log(recivedMarkers[0].coordinate.longitude);
        setMarkers(recivedMarkers);
        setCountMarkers(recivedMarkers.length);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={myLocation}
        provider={provider}
        style={styles.map}
        customMapStyle={customStyle}
      >
        {countMarkers > 0 &&
          markers.map((marker) => (
            <Marker
              title={marker.key}
              image={WarningIcon}
              coordinate={{
                latitude: marker.coordinate.latitude,
                longitude: marker.coordinate.longitude,
              }}
              key={marker.key}
            />
          ))}
        <Marker
          title={"המיקום שלי"}
          image={my}
          coordinate={{
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
          }}
          key={"myLocation"}
        />
      </MapView>
      <HeaderFire navigation={navigation} style={styles.header} />
      <View style={styles.headLine}>
          <Pressable style={styles.back}>
            <Button
              type="outline"
              title=" "
            />
          </Pressable>
          <Text style={styles.textHeadline}> מפת הדיווחים</Text>
          <Text style={styles.underText}>{countMarkers} אירועים</Text>
        </View>
    </View>
  );
};

export default connect(mapStateToProps)(RealTimeScreen);

RealTimeScreen.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // justifyContent: "flex-end",
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
    top: 100,
  },
  textHeadline: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    width: 300,
    height:50
  },
  back: {
    marginLeft: 15,
  },
  underText: {
    color: "yellow",
    fontSize: 14,
    fontWeight: "700",
    textAlign:"center",
    position: "absolute",
    marginTop: 40,
    marginLeft: "31%"
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
  header: {
    position: "absolute",
    marginBottom: 500,
    zIndex: 1000,
    marginTop: 200,
  },
  counter:{
    position:"absolute",
    marginTop: 50,
    color: "black",
    backgroundColor: "green",
    height: 30,
    width: 30
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
