
import { useState,useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image, StatusBar } from "react-native";
import {dificuldade} from "./start"
import { Audio } from 'expo-av';
import Cronometro, {iniciar} from '../components/cronometro'



let c1 = "vazio";
let openIndex;
let canClick = true;
let duplas = 0;
var music = 'play'
var cronometroIncio = true;
var jogando = true;


const cardBack ='https://i.pinimg.com/736x/8e/12/d0/8e12d05811d96e31815dd54050b387e8.jpg'
const ravenclaw = 'https://i.pinimg.com/564x/36/3a/4c/363a4c6af050cf36386960d3df9043dd.jpg'
const slytherin = 'https://i.pinimg.com/originals/0f/aa/8c/0faa8c947a84e9238c75fde8b61f00f4.jpg'
const hufflepuff= 'https://i.pinimg.com/564x/35/78/b9/3578b94ba69fc20f6cc9204135f1f4a7.jpg'
const gryffindor = 'https://i.pinimg.com/originals/93/9d/c2/939dc23604f7d5cd7dae86d5774c946c.jpg' 
const dHallows = 'https://i.pinimg.com/564x/55/dd/55/55dd55ac1b21e123b8903e671db2a8a4.jpg'
const plataform = 'https://i.pinimg.com/564x/a2/f1/97/a2f197689a1461775d4f1c530dc5381e.jpg'
const hogwarts = "https://mfiles.alphacoders.com/891/891687.jpg"
const goldenSnitch = 'https://i.pinimg.com/originals/3d/78/a2/3d78a253a23fb598cb97eacda2000f23.jpg'
const selectionHat = "https://wallpaper.dog/large/10999069.jpg"

const carta = [ ravenclaw,slytherin,hufflepuff,gryffindor,plataform,dHallows,hogwarts,goldenSnitch,selectionHat]
const cores = [];



export default function GameStart() {
  let cartas = dificuldade;
  for(var x = 0; x < cartas/2; x++){
  var cartaIndex = Math.floor(Math.random() * carta.length);
  var cartaSelecionada = carta[cartaIndex];
  carta.splice(cartaIndex, 1);
  cores.push(cartaSelecionada)
  cores.push(cartaSelecionada)
}



var b = [];
for (var x = 0; x < cartas; x++) {
  var colorIndex = Math.floor(Math.random() * cores.length);
  var cor = cores[colorIndex];
  cores.splice(colorIndex, 1);
  var card = { id: x, status: 'virado', color: cor };
  b.push(card);
}

  const [board, setBoard] = useState([...b]);
  const turnCard = (type, index) => {
    let newBoard = [...board];
    newBoard[index].status = type;
    setBoard(newBoard);
  };

  const win = () => {
    alert("Parabéns, Você VENCEU!");
  };

  const handleClick = (index, card) => {  
    playSound()
    iniciar('start');
    if (board[index].status === 'virado' && canClick) {
      turnCard('ativo', index);
      if (c1 == "vazio") {
        c1 = card;
        openIndex = index;
      } else if (c1 != "vazio") {
        canClick = false;
        if (c1.color === card.color) {
          canClick = true;
          duplas += 2;
          if (duplas == cartas)
            setTimeout(function () {
              win(), 1500;
              iniciar(true);
            });
        } else {
          setTimeout(function () {
            turnCard('virado', index), (canClick = true);
          }, 750);
          setTimeout(function () {
            turnCard('virado', openIndex);
          }, 750);
        }
        c1 = "vazio";
      }
    }
  };


  const [sound, setSound] = useState();

  async function playSound() {
    if(music == 'play'){
    const { sound } = await Audio.Sound.createAsync( require('../../assets/Hp.mp3'));
    setSound(sound);
     sound.setIsLoopingAsync(true)
    await sound.playAsync();
    music = 'playing'
  }
}

  useEffect(() => {
    return sound
      ? () => {
          
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  let timer = null;
  let segundos = 0;
  let minutos = 0;
  const [numero, setNumero] = useState('00:00');
  function iniciar(vitoria){
    if(cronometroIncio === true){
      cronometroIncio = false
      timer = setInterval(()=> {
        if(jogando == true){
        segundos++;
        if(segundos == 60){
          segundos = 0;
          minutos++;
        }
        if(minutos == 60){
          minutos = 0;
          horas++
        }
  
        let format = (minutos<10? '0' + minutos: minutos) 
        + ':' + (segundos<10? '0' + segundos: segundos);
  
        setNumero(format);}
      }, 1000);
  
    }
    else if(vitoria === true){
       clearInterval(timer);
       jogando=false;
    }
  }


  return (
    <View style={styles.container}>
       <StatusBar/>
      <Cronometro numero={numero} ></Cronometro>
      <View style={styles.board}>
      {board.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => handleClick(index, card)}>
          <View style={[styles.card,/* {backgroundColor: card.status === 0 ? "transparent" : card.color,} */]}>
          <Image style={[styles.img,{}]}source={{uri:card.status === 'virado' ? cardBack : card.color}}></Image>
          </View>
       
        </TouchableOpacity>
      ))}
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "black",
  },
  board: {

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center",
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  card: {
    margin: 10, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor:"grey"
  },
});
