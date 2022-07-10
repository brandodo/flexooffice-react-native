import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import hannah from "../../../assets/images/hannah.png";

const Drawer = ({ username, showDrawer }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, styles.divider]}>
        <Ionicons
          name="close"
          size={24}
          color="#fff"
          onPress={() => showDrawer(false)}
          style={{ position: "relative", left: "90%" }}
        />
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 15 }}
        >
          <Image source={hannah} />
          <Text style={[styles.text.general, styles.text.header]}>
            {username}
          </Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.text.general, styles.text.menu]}>Schedule</Text>
        <View style={styles.divider}></View>
        <Text style={[styles.text.general, styles.text.menu]}>Events</Text>
        <View style={styles.divider}></View>
        <Text style={[styles.text.general, styles.text.menu]}>Profile</Text>
        <View style={styles.divider}></View>
        <Text
          style={[styles.text.general, styles.text.menu, { fontWeight: "700" }]}
        >
          Sign Out
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#5b8783",
    marginTop: 40,
  },
  subContainer: {
    width: "100%",
    alignItems: "flex-start",
    padding: 15,
  },

  text: {
    general: {
      color: "#fff",
      padding: 20,
    },
    header: {
      fontWeight: "700",
      fontSize: 32,
    },
    menu: {
      fontSize: 20,
    },
  },
  divider: {
    width: "100%",
    borderBottomColor: "#4e6664",
    borderBottomWidth: 2,
  },
});

export default Drawer;
