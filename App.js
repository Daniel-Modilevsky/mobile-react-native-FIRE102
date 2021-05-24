import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Navigation />
        <StatusBar />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
