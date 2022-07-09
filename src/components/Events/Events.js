import Event from "./Event";
import { StyleSheet, View } from "react-native";

const Events = ({ events }) => {
  const listOfEvents = events.map((event, index) => (
    <Event key={index} data={event} />
  ));

  return <View style={styles.container}>{listOfEvents}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    direction: "ltr",
  },
});

export default Events;
