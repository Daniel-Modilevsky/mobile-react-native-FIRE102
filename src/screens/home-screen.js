import React  from 'react';
import { StyleSheet, View, Image } from 'react-native';
import button from '../../assets/button.png'

const HomeScreen = () => {
  return (
      <View style={styles.screen}>
          <Image source={button} style={styles.logo} />
      </View>
  );
};

export default HomeScreen;

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
    height: 400,
    width: 400,
  }
});


