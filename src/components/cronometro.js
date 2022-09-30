import React, {useState} from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

let timer = null;
let segundos = 0;
let minutos = 0;


export default function App() {

  const [numero, setNumero] = useState('00:00:00');
  const [botao,setBotao] = useState('INICIAR');


  function iniciar(){
    // AQUI É PARA REINICIAR O TIMER
    if(timer !== null){
      clearInterval(timer);
      timer=null;
      setBotao('INICIAR');
    }else{ 
      // É PARA INICIAR O TIMER
      setBotao('Parar');
      timer = setInterval(()=> {
        segundos++; //Acumulação

        // minutos
        if(segundos == 60){
          segundos = 0;
          minutos++;
        }

        // horas

        if(minutos == 60){
          minutos = 0;
          horas++
        }

        let format = (minutos<10? '0' + minutos: minutos) 
        + ':' + (segundos<10? '0' + segundos: segundos);

        setNumero(format);

      }, 1000);

      setBotao('PARAR');

    }

  }


 return (
  
   <SafeAreaView style={styles.container}>
    <StatusBar/>


    <Text style={styles.texto}> {numero} </Text>

    <View style={styles.botaoArea}>

      <TouchableOpacity style = {styles.botao} onPress ={iniciar}>
        <Text style = {styles.botaoTexto}> {botao} </Text>  
      </TouchableOpacity>


    </View>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  imagem:{
  
  },
  texto:{
    marginTop: -160,
    fontSize: 45, 
    fontWeight: 'bold',
    color: '#FFF'
  },
  botaoArea:{
    flexDirection: 'row',
    marginTop: 160,
    height: 40
  },
  botao:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 18,
    borderRadius: 9,
    backgroundColor: '#FFF',
    height: 40
  }, 
  botaoTexto:{
    fontSize: 22,
    fontWeight: 'bold'
  }, 


});