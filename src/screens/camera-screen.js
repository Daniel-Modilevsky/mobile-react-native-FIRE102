import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, takePictureAsync } from 'expo-camera'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [picTaken, setPicTaken] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const options = { quality: 1, base64: true };
      const pic = await camera.takePictureAsync(options);
      setPicTaken(pic);
    }
    else {
      setPicTaken(false);
    }
  };

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
            camera = r
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity

              onPress={async () => takePicture()}
              style={styles.button}>
              <Text style={styles.text}> צלם </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  else
    return (
      <View style={styles.screen}>
        <Image style={{
          height: '70%',
          width: '70%',
          borderWidth: 5,
          borderColor: '#FFFFFF'
        }} source={{ uri: picTaken.uri }} />
        <View style={{
          flexDirection: 'row',
          marginTop: '3%',
        }}>
          <TouchableOpacity
            onPress={() => setPicTaken(false)}
            style={{
              width: 100,
              borderRadius: 50,
              backgroundColor: '#F56552',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              צלם שוב
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Report")}
            style={{
              width: 100,
              borderRadius: 50,
              backgroundColor: '#228B22',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
              margin: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              אישור
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )

};

export default CameraScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#282834',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});