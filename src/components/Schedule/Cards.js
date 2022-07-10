import { View, Button, StyleSheet } from "react-native";
import Card from "./Card";

const Cards = ({ data }) => {
  const temp = data.slice(0, 3);
  const listOfCards = temp.map((card, index) => (
    <Card key={`card-${index}`} data={card} />
  ));
  return <View>{listOfCards}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  
});

export default Cards;
