import { View, Text, StyleSheet, Button } from "react-native";
import Cards from "./Cards";

const Schedule = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text.subHeader}>My Schedule</Text>
      <Cards data={data} />
      <View style={styles.button}>
        <Button color="#4e6664" title="Book In-Office Time" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#5b8783",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  text: {
    subHeader: {
      alignSelf: "flex-start",
      color: "#fff",
      fontSize: 23,
      fontWeight: "600",
      paddingBottom: 15,
    },
  },
  button: {
    backgroundColor: "#f2cda0",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderRadius: "5px",
    padding: 5,
    margin: 10,
    width: 300,
  },
});

export default Schedule;
