import React from 'react';
import { View, StyleSheet } from 'react-native';
import Game from './src/telas/game.js';
import Start from './src/telas/start.js';
import Cronometro from './src/components/cronometro'

export default function app() {
 return (
   <View style={styles.container}>
    <Game></Game>
  
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