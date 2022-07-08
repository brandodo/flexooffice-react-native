import { View, Text, StyleSheet, Image } from "react-native";

const API_URL = "https://flexooffice-server.herokuapp.com";

const Event = ({ data }) => {
  const { name, date, time, imageLarge } = data;
  const imageUrl = `${API_URL}/${imageLarge}`;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{date}</Text>
      <Text>{time}</Text>
      <Image style={styles.image} source={{ uri: imageUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "lightblue",
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default Event;
