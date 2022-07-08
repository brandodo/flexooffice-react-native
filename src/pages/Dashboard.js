import { ScrollView, StyleSheet, Text, View } from "react-native";
import Events from "../components/Events";

const Dashboard = ({ data, bg }) => {
  const { email, username, userInfo, event } = data;

  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={[styles.container, bg]}>
        <Text style={styles.header}>WELCOME {username}!</Text>
        <Text>Email: {email}</Text>
        <Text>Here's what you have going on for this week:</Text>
        <Events events={event} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 60,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    fontSize: 26,
  },
});

export default Dashboard;
