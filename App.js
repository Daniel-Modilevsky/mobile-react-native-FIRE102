import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigator';
import { Provider } from 'react-redux';
import store from './src/reducers/store';

export default function App() {
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
          <StatusBar />
      </View>
      </Provider>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});


