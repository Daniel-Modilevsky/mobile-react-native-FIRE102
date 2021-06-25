import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  Pressable,
} from "react-native";
import { connect } from "react-redux";
import store from "../reducers/store";
import axios from "axios";
import { Button } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";

const getTime = () => {
  let date = new Date();

  let hours = "" + date.getHours();
  if (hours.length < 2) hours = "0" + hours;

  let minutes = "" + date.getMinutes();
  if (minutes.length < 2) minutes = "0" + minutes;

  let seconds = "" + date.getSeconds();
  if (seconds.length < 2) seconds = "0" + seconds;

  let time = `${hours}:${minutes}:${seconds}`;

  return time;
};

/*REDUCER-CONNECTION*/
function mapStateToProps(state) {
  return {
    marker: state.map.marker,
    userName: state.user.userName,
    phoneNumber: state.user.phoneNumber,
  };
}

const ReportScreen = ({ userName, phoneNumber, marker, navigation }) => {
  const [report, setReport] = React.useState({});

  useEffect(() => {
    setReport({
      userName: userName,
      phoneNumber: phoneNumber,
      marker: marker,
      type: "שריפה",
      time: getTime(),
      comment: "none",
      image:
        "https://boston.cbslocal.com/wp-content/uploads/sites/3859903/2021/06/lawrence-fire-pic-@jamie1Kelley.jpg?w=1024",
    });
    temp();
  }, []);

  const temp = async () => {
    const a = await AsyncStorage.getItem("userName");
    const b = await AsyncStorage.getItem("phoneNumber");
    console.log(a);
    console.log(b);
  };

  const sendReport = () => {
    fetch("https://fire102.herokuapp.com/api/reports", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        throw error;
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.screenText}> פרטי דיווח </Text>

        <View style={styles.field}>
          <Text style={styles.textFields}> {userName} </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.textFields}> {phoneNumber} </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.textFields}>
            {marker.displayName.length > 40
              ? marker.displayName.substring(0, 40 - 3) + "..."
              : marker.displayName}
          </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.textFields}> {"שריפה"} </Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.textFields}> {getTime()} </Text>
        </View>
        <TextInput
          style={styles.inputField}
          placeholder="הערות"
          multiline={true}
        />
        <TouchableOpacity style={styles.confirmBtn} onPress={sendReport}>
          <Text style={styles.screenText}>דווח</Text>
        </TouchableOpacity>
        <View style={styles.headLine}>
          <Pressable style={styles.back}>
            <Button
              type="outline"
              onPress={() => navigation.navigate("Camera")}
              icon={<FontAwesome5 name="arrow-right" size={15} color="#fff" />}
            />
          </Pressable>
          <Text style={styles.textHeadline}> פרטי הדיווח</Text>
          <Text style={styles.leftText}>5/5</Text>
        </View>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(ReportScreen);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#282834",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  field: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff5be",
    paddingTop: 10,
    width: "80%",
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    // whiteSpace: "nowrap",
    // overflow:"hidden",
    // textOverflow: "ellipsis"
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
  textFields: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  confirmBtn: {
    height: 100,
    width: 100,
    backgroundColor: "#F56552",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderStyle: "solid"
  },
  inputField: {
    textAlign: "center",
    backgroundColor: "white",
    width: "80%",
    height: 130,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    color: "black",
    fontSize: 15,
  },
});
