import { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Drawer from "../Drawer/Drawer";
import logo from "../../../assets/images/flex-office-logo_V01.png";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ username }) => {
  const [drawer, showDrawer] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <View>
          <Ionicons
            name="menu"
            size={32}
            color="black"
            onPress={() => showDrawer(true)}
          />
        </View>
      </View>
      {drawer && <Drawer username={username} showDrawer={showDrawer} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    marginTop: 40,
    zIndex: 1,
    backgroundColor: "#fdf8f4",
    width: "100%",
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    paddingHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 50,
    marginTop: 20,
  },
});

export default Header;
