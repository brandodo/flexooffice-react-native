import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import News from "../components/News/News";
import Status from "../components/Status/Status";
import Events from "../components/Events/Events";
import Schedule from "../components/Schedule/Schedule";
import Header from "../components/Header/Header";

const Dashboard = ({ data, bg }) => {
  const { username, userInfo, event, booking } = data;
  const { qrcodecolor, date } = userInfo[0];

  const temp1 = event.map((e) => {
    return { name: e.name, date: e.date, time: e.time, location: e.location };
  });

  const temp2 = booking.map((b) => {
    return {
      name: "Work",
      date: b.date,
      time: b.booking[0].timeperiod,
      location: `${b.roomname} Room`,
    };
  });

  const schedulePreview = [...temp1, ...temp2];

  return (
    <SafeAreaView style={styles.mainView}>
      <Header username={username} />
      <ScrollView contentContainerStyle={[styles.container, bg]}>
        <View style={styles.text.container}>
          <Text style={styles.text.header}>
            Good Morning, {`\n${username}`}
          </Text>
          <Text style={styles.text.general}>Today is feeling super!</Text>
        </View>
        <News />
        <Status status={qrcodecolor} updated={date} />
        <Schedule data={schedulePreview} />
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
    marginTop: 75,
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
