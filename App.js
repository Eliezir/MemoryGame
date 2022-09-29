import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
let c1 = 'vazio'
let openIndex;
 
export default function App() {
  const [board, setBoard] = useState([
    { id: 1, status: 0, color: "#8E44AD" },
    { id: 2, status: 0, color: "#DC7633" },
    { id: 3, status: 0, color: "#3498DB" },
    { id: 4, status: 0, color: "#DC7633" },
    { id: 5, status: 0, color: "#3498DB" },
    { id: 6, status: 0, color: "#8E44AD" },
  ]);
 
  const turnCard = (type, index) => {
      let newBoard = [...board];
      newBoard[index].status = type;
      setBoard(newBoard);
}
 
const compareCard = (card, index) => {
  if(c1 == 'vazio'){
    c1 = card
    openIndex = index;
}
else if(c1 != 'vazio'){
    if(c1.color === card.color){
      console.log('match')
    }
    else{
      console.log("not match")
      setTimeout(function() {turnCard(0, index)},1000)
      setTimeout(function() {turnCard(0, openIndex)} ,1000)
    
    
}
c1 = 'vazio'    
}
}
 const handleClick = (index,card) => {
   if(board[index].status === 0){
  turnCard(1,index)
  compareCard(card,index)}
 }
 
 
  return (
    <View style={styles.container}>
      {board.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => handleClick(index,card)}>
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
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 50,
    width: 40,
    borderRadius: 4,
    margin: 4,
  },
});

