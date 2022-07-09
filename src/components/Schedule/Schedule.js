import { View, Text, StyleSheet } from "react-native";

const Schedule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text.subHeader}>My Schedule</Text>
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
});

export default Schedule;
