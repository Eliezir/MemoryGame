import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from './src/telas/game.js';
import Start from './src/telas/start.js';


const Stack = createNativeStackNavigator();

export default function app() {
 return (
   <View style={styles.container}>
      <StatusBar/>
      <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Start}/>
      <Stack.Screen name="Game" component={Game}/>
        </Stack.Navigator>
  </NavigationContainer>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor:"#141414"
  },
});