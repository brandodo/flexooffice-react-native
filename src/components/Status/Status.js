import { View, Text, Image, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import qrcode from "../../../assets/images/QRcode-placeholder.png";

const Status = ({ status, updated }) => {
  const statusObject = () => {
    switch (status) {
      case "success":
        return {
          message: "You are cleared to go!",
          colors: [
            "#29bc04",
            "#1fd7ab",
            "#3e7852",
            "#5b8783",
            "#7aa7ad",
            "#c1fdef",
          ],
        };

      case "warning":
        return {
          message: "Please update your status",
          colors: [
            "#ffa800",
            "#d7ac40",
            "#ee8f00",
            "#fcea2b",
            "#ffc632",
            "#ffda7b",
          ],
        };

      case "error":
        return {
          message: "You are not cleared to enter the office!",
          colors: [
            "#ff0000",
            "#a71717",
            "#ce0404",
            "#f4381e",
            "#f45e1e",
            "#fb9a28",
          ],
        };

      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text.position, styles.text.subHeader]}>
        My Health QR Code
      </Text>
      <Text style={[styles.text.position, styles.text.general]}>
        {statusObject().message}
      </Text>
      <LinearGradient
        colors={statusObject().colors.reverse()}
        style={styles.qrcode.gradient}
        start={{ x: 0, y: 0 }}
      >
        <View style={styles.qrcode.container}>
          <Image style={styles.qrcode.code} source={qrcode} />
        </View>
      </LinearGradient>
      <Text style={styles.text.general}>Last recorded: {updated}</Text>
      <View style={styles.button}>
        <Button color="#4e6664" title="Update My Status" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  qrcode: {
    gradient: {
      justifyContent: "center",
      alignItems: "center",
      width: 210,
      height: 210,
      borderRadius: 40,
      margin: 15,
    },
    container: {
      width: 175,
      height: 175,
      backgroundColor: "#fff",
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    code: {
      width: 160,
      height: 160,
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
  text: {
    position: {
      alignSelf: "flex-start",
    },
    subHeader: {
      color: "#4e6664",
      fontSize: 23,
      fontWeight: "600",
      paddingBottom: 15,
    },
    general: {
      color: "#4e6664",
      fontSize: 18,
    },
  },
});

export default Status;
