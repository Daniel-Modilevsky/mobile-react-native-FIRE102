import React  from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../../assets/firelogo.jpg';

const OptionsScreen = () => {
  
  return (
      <View style={styles.screen}>
          <Text style={styles.screenText}>OptionsScreen</Text>
          <Image source={logo} style={styles.logo} />
      </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  screen:{
    backgroundColor: '#282834',
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  screenText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  logo: {
    height: 200,
    width: 200,
  }
});