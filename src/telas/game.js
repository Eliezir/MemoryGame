import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, } from "react-native";

let c1 = "vazio";
let openIndex;
let cartas = 12;
let canClick = true;
let duplas = 0;
const cores = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
];
var b = [];
for (var x = 0; x < cartas; x++) {
  var colorIndex = Math.floor(Math.random() * cores.length);
  var cor = cores[colorIndex];
  cores.splice(colorIndex, 1)
  var card = {id:x, status:0, color:cor}
  b.push(card);
}
export default function gameStart() {

  const [board, setBoard] = useState([...b]);
  const turnCard = (type, index) => {
    let newBoard = [...board];
    newBoard[index].status = type;
    setBoard(newBoard);
  };

  const win = () =>{
    alert("Parabéns, Você VENCEU!")
  }

  const handleClick = (index, card) => {
    if (board[index].status === 0 && canClick) {
      turnCard(1, index);
      if (c1 == "vazio") {
        c1 = card;
        openIndex = index;
      } else if (c1 != "vazio") {
        canClick = false;
        if (c1.color === card.color) {
          canClick = true
          console.log("match");
          duplas +=2;
          if(duplas == cartas)
          setTimeout(function() {win(),1500}) 
        } else {
          console.log("not match");
          setTimeout(function () {
            turnCard(0, index), canClick = true;
          }, 750);
          setTimeout(function () {
            turnCard(0, openIndex);
          }, 750);
        }
        c1 = "vazio";
      }
    };
    }
  

  return (    
    <View style={styles.container}>
      {board.map((card, index) => (
        <TouchableOpacity
          key={card.id}
          onPress={() => handleClick(index, card)}
        >
          <View
            style={[
              styles.card,
              { backgroundColor: card.status === 0 ? "#ABB2B9" : card.color },
            ]}
          ></View>
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
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    height: 150,
    width: 100,
    borderRadius: 4,
    margin: 10,
  },
});
