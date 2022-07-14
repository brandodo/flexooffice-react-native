import Event from "./Event";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const Events = ({ events }) => {
  if (!events) {
    return null;
  }

  const filteredEvents = events.filter((event) => event.eventinfo.imageSmall);
  const listOfEvents = filteredEvents.map((event, index) => (
    <Event key={index} data={event} />
  ));

  return (
    <View style={styles.container}>
      <Text>Events</Text>
      <ScrollView
        contentContainerStyle={styles.tileContainer}
        horizontal={true}
      >
        {listOfEvents}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: 350,
    padding: 30,
  },
  tileContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
});

export default Events;
