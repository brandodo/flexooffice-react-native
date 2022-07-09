import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import News from "../components/News/News";
import Status from "../components/Status/Status";
import Events from "../components/Events/Events";
import Schedule from "../components/Schedule/Schedule";

const Dashboard = ({ data, bg }) => {
  const { username, userInfo, event } = data;
  const { qrcodecolor, date } = userInfo[0];

  return (
    <SafeAreaView style={styles.mainView}>
      <ScrollView contentContainerStyle={[styles.container, bg]}>
        <View style={styles.text.container}>
          <Text style={styles.text.header}>
            Good Morning, {`\n${username}`}
          </Text>
          <Text style={styles.text.general}>Today is feeling super!</Text>
        </View>
        <News />
        <Status status={qrcodecolor} updated={date} />
        <Schedule />
        <Text>Here's what you have going on for this week:</Text>
        <Events events={event} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    container: {
      justifyContent: "flex-start",
      width: "100%",
      padding: 30,
    },
    header: {
      color: "#4e6664",
      fontWeight: "700",
      fontSize: 32,
      lineHeight: 34,
      paddingBottom: 15,
    },
    general: {
      color: "#4e6664",
      fontSize: 18,
    },
  },
});

export default Dashboard;
