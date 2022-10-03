import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

let c1 = "vazio";
let openIndex;
let cartas = 12;
let canClick = true;
let duplas = 0;

/* const cardBack = require("../../cardback.jpg"); */
const cardBack ='https://i.pinimg.com/736x/8e/12/d0/8e12d05811d96e31815dd54050b387e8.jpg'
const ravenclaw = 'https://i.pinimg.com/564x/36/3a/4c/363a4c6af050cf36386960d3df9043dd.jpg'
const slytherin = 'https://i.pinimg.com/originals/0f/aa/8c/0faa8c947a84e9238c75fde8b61f00f4.jpg'
const hufflepuff= 'https://i.pinimg.com/564x/35/78/b9/3578b94ba69fc20f6cc9204135f1f4a7.jpg'
const gryffindor = 'https://i.pinimg.com/originals/93/9d/c2/939dc23604f7d5cd7dae86d5774c946c.jpg' 
const teste = 'https://i.pinimg.com/564x/55/dd/55/55dd55ac1b21e123b8903e671db2a8a4.jpg'
const plataform = 'https://i.pinimg.com/564x/a2/f1/97/a2f197689a1461775d4f1c530dc5381e.jpg'

const cores = [
  ravenclaw,
  slytherin,
  hufflepuff,
  gryffindor,
  ravenclaw,
  slytherin,
  hufflepuff,
  gryffindor,
  teste,
  teste,
  plataform,
  plataform
];
var b = [];
for (var x = 0; x < cartas; x++) {
  var colorIndex = Math.floor(Math.random() * cores.length);
  var cor = cores[colorIndex];
  cores.splice(colorIndex, 1);
  var card = { id: x, status: 0, color: cor };
  b.push(card);
}
export default function gameStart() {
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
    if (board[index].status === 0 && canClick) {
      turnCard(1, index);
      if (c1 == "vazio") {
        c1 = card;
        openIndex = index;
      } else if (c1 != "vazio") {
        canClick = false;
        if (c1.color === card.color) {
          canClick = true;
          console.log("match");
          duplas += 2;
          if (duplas == cartas)
            setTimeout(function () {
              win(), 1500;
            });
        } else {
          console.log("not match");
          setTimeout(function () {
            turnCard(0, index), (canClick = true);
          }, 750);
          setTimeout(function () {
            turnCard(0, openIndex);
          }, 750);
        }
        c1 = "vazio";
      }
    }
  };

  return (
    <View style={styles.container}>
      {board.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => handleClick(index, card)}>
          <View style={[styles.card,/* {backgroundColor: card.status === 0 ? "transparent" : card.color,} */]}>
          <Image style={[styles.img,{}]}source={card.status === 0 ? cardBack : card.color}></Image>
          </View>
       
        </TouchableOpacity>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
  },
  img: {
    height: 150,
    width: 100,
    borderRadius: 10,
  },
  card: {
    margin: 10, 
    borderRadius: 10,
    border:'2px solid white'
  },
});
