import React from 'react';
import { View,TouchableOpacity,Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function start() {
 return (
   <View style={styles.container}>
    <View style={styles.div}>
      <Text style={styles.title}>Memory Game</Text>
<TouchableOpacity>
<Icon name="play" size= {30} color='#6320ee'/>
</TouchableOpacity>
    </View>


   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: 'center'
  },
  div: {
    width:300, 
    height:200,
    border: '1px solid #6320ee ', 
    backgroundColor: "#0000",
    borderRadius:30, 
    alignItems:'center', 
    justifyContent:'space-around'
  },
  title: {
    fontSize:25,
     color:'#ffff',
     fontWeight:'bold',
  }

});