import React,{useState} from 'react';
import { View,TouchableOpacity,Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


 export var dificuldade;
function nivel(nivel){
  dificuldade = nivel;
}
export default function Start() {


const navigation = useNavigation();
 return (
   <View style={styles.container}>
    <View style={styles.div}>
      <Text style={styles.title}>Harry Potter</Text>
      {/* <Image style={{width:60,height:60}}source={{uri:"https://i.pinimg.com/originals/b5/ed/52/b5ed5298cea27075aea8b03bc551ad88.png"}}></Image> */}
<TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Game'); nivel(8)}}>
<Text style={styles.textBtn}>Fácil</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Game'); nivel(12)}}>
<Text style={styles.textBtn}>Médio</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('Game'); nivel(18)}}>
<Text style={styles.textBtn}>Difícil</Text>
</TouchableOpacity>
    </View>


   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
    alignItems: 'center'
  },
  div: {
    alignItems:'center', 
    justifyContent:'space-around',
  },
  title: {
    fontSize:50,
     color:'#ffff',
     fontWeight:'bold',
  },
  btn: {
    width:150,
    padding:10,
    borderRadius:15,
    backgroundColor:'#6320ee',
    alignItems: 'center',
    margin:15,
  },
  textBtn:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
    textTransform:'uppercase',
  }

});