import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

const getTime = () => {
  let date = new Date();

  let hours = "" + date.getHours();
  if(hours.length < 2) hours = "0"+hours;

  let minutes = "" + date.getMinutes();
  if(minutes.length < 2) minutes = "0"+minutes;

  let seconds = "" + date.getSeconds();
  if(seconds.length < 2) seconds = "0"+seconds;

  time = `${hours}:${minutes}:${seconds}`;

  return time;
}

const ReportScreen = (fullname, phone, location, type) => {

  fullname = "ברק דניאל";
  phone = "059-9999999";
  location = "גבעת השלושה 0, גבעת השלושה";
  type = "שריפה";

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.screenText}> פרטי דיווח </Text>

        <View style={styles.field}><Text style={styles.textFields}> {fullname} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {phone} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {location} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {type} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {getTime()} </Text></View>
        <TextInput style={styles.inputField} placeholder="הערות" multiline={true}/>
        <TouchableOpacity style={styles.confirmBtn} >
          <Text style={styles.screenText}>דווח</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#282834',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  field: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    width: '80%',
    height: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  textFields: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  confirmBtn: {
    height: 100,
    width: 100,
    backgroundColor: '#F56552',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    textAlign: 'center',
    backgroundColor: 'white',
    width: '80%',
    height: 180,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    color: 'black',
    fontSize: 15,
  },
});