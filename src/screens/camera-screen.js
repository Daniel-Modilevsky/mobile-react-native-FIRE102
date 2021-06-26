import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Camera, takePictureAsync } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";
import { AddPhoto } from "../components/map/map.actions";

/*REDUCER-CONNECTION*/
function mapStateToProps(state) {
  return {
    photoUrl: state.map.photoUrl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setterPhoto: (photo) => dispatch(AddPhoto(photo)),
  };
}


const CameraScreen = ({ navigation, photoUrl, setterPhoto }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [picTaken, setPicTaken] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 1, base64: true };
      const pic = await camera.takePictureAsync(options);
      setPicTaken(pic);
    } else {
      setPicTaken(false);
    }
  };

  const confirm = () => {
    setterPhoto(picTaken);
    // setPicTaken(null);
    setPicTaken(false);
    navigation.navigate("Report");
  }


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (!picTaken)
    return (
      <View style={styles.screen}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={async () => takePicture()}
              style={styles.button}
            >
              <Text style={styles.text}> צלם </Text>
            </TouchableOpacity>
          </View>
        </Camera>

        <View style={styles.headLine}>
          <Pressable style={styles.back}>
            <Button
              type="outline"
              onPress={() => navigation.navigate("Map")}
              icon={<FontAwesome5 name="arrow-right" size={15} color="#fff" />}
            />
          </Pressable>
          <Text style={styles.textHeadline}> תיעוד האירוע</Text>
          <Text style={styles.leftText}>3/5</Text>
        </View>
      </View>
    );
  else
    return (
      <View style={styles.screen}>
        <Image
          style={{
            height: "70%",
            width: "70%",
            borderWidth: 5,
            borderColor: "#FFFFFF",
          }}
          source={{ uri: picTaken.uri }}
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: "3%",
          }}
        >
          <TouchableOpacity
            onPress={() => setPicTaken(false)}
            style={{
              width: 100,
              borderRadius: 50,
              backgroundColor: "#F56552",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              צלם שוב
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => confirm()}
            style={{
              width: 100,
              borderRadius: 50,
              backgroundColor: "#228B22",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              אישור
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headLine}>
          <Pressable style={styles.back}>
            <Text>      </Text>
          </Pressable>
          <Text style={styles.textHeadline}> אישור התמונה</Text>
          <Text style={styles.leftText}>4/5</Text>
        </View>
      </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(CameraScreen);


const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
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
  back: {
    marginLeft: 15,
  },
  leftText: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "700",
  },
});
