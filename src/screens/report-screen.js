import React , {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import { connect } from "react-redux";
import store from '../reducers/store';


const getTime = () => {
  let date = new Date();

  let hours = "" + date.getHours();
  if(hours.length < 2) hours = "0"+hours;

  let minutes = "" + date.getMinutes();
  if(minutes.length < 2) minutes = "0"+minutes;

  let seconds = "" + date.getSeconds();
  if(seconds.length < 2) seconds = "0"+seconds;

  let time = `${hours}:${minutes}:${seconds}`;

  return time;
}


/*REDUCER-CONNECTION*/
function mapStateToProps(state) {
  return {
    marker: state.map.marker.displayName,
    userName: state.user.userName,
    phoneNumber: state.user.phoneNumber
  };
}

const ReportScreen = ({userName, phoneNumber, marker}) => {

  useEffect(() => {
    console.log(userName);
    console.log(phoneNumber);
    console.log(store.getState());
    temp();
  }, []);

  const temp = async () => {
    const a = await AsyncStorage.getItem("userName");
    const b = await  AsyncStorage.getItem("phoneNumber");
    console.log(a);
    console.log(b);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.screenText}> פרטי דיווח </Text>

        <View style={styles.field}><Text style={styles.textFields}> {userName} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {phoneNumber} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {marker} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {"שריפה"} </Text></View>
        <View style={styles.field}><Text style={styles.textFields}> {getTime()} </Text></View>
        <TextInput style={styles.inputField} placeholder="הערות" multiline={true}/>
        <TouchableOpacity style={styles.confirmBtn} >
          <Text style={styles.screenText}>דווח</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(ReportScreen);


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
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    // whiteSpace: "nowrap", 
    // overflow:"hidden", 
    // textOverflow: "ellipsis" 
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
    height: 130,
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    color: 'black',
    fontSize: 15,
  },
});