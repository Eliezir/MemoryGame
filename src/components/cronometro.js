import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';





export default function App(props) {


 return (
  
   <View>


    <Text style={styles.texto}> {props.numero} </Text>

   </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    margin: 0,
    fontSize: 45, 
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center'
  },
});