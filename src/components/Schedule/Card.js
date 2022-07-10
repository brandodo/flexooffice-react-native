import { View, Text, StyleSheet } from "react-native";

const Card = ({ data }) => {
  const { name, date, time, location } = data;

  let color;

  switch (location.split(" ")[0].toLowerCase()) {
    case "red":
      color = "#8d3d4b";
      break;

    case "blue":
      color = "#838dc6";
      break;

    case "green":
      color = "#638454";
      break;

    case "orange":
      color = "#d3955a";
      break;

    case "pink":
      color = "#e69ce6";
      break;

    case "yellow":
      color = "#cabb78";
      break;

    default:
      break;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: color }]}></View>
      <View style={styles.text.container}>
        <Text style={[styles.text.general, { fontWeight: "600" }]}>{name}</Text>
        <Text style={styles.text.general}>{date}</Text>
        <Text style={styles.text.general}>{time}</Text>
        <Text style={styles.text.general}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#fdf8f4",
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: "50%",
  },
  text: {
    container: {
      width: "60%",
    },
    general: {
      color: "#4e6664",
    },
  },
});

export default Card;
