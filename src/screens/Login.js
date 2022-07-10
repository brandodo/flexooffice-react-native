import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import LoginInput from "../components/LoginInput/LoginInput";
import headerStock from "../../assets/images/17839577_generated.jpg";
import logo from "../../assets/images/flex-office-logo_V01.png";
import axios from "axios";

const Login = ({
  API_URL,
  navigation,
  user,
  pass,
  setUsername,
  setPassword,
  setUser,
  bg,
}) => {
  const [type, setType] = useState("");

  const goToDashboard = async (email, password) => {
    try {
      const { data } = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      setUser(data);
      navigation.navigate("Dashboard");
    } catch (err) {
      return alert(err);
    }
  };

  return (
    <SafeAreaView style={[bg, styles.container]}>
      <View style={styles.screenContainer}>
        <Image style={styles.images.header} source={headerStock} />
        {!type && (
          <View style={styles.loginContainer}>
            <Image style={styles.images.logo} source={logo} />
            <Text style={styles.text}>
              Welcome to your
              <Text style={[{ color: "#7aa7ad" }]}> in-office </Text>booking
              <Text style={{ color: "#7aa7ad" }}> solution!</Text>
            </Text>
            <Text style={styles.text}>Log-In</Text>
            <View style={[styles.buttons.general, styles.buttons.primary]}>
              <Button title="Employee" onPress={() => setType("Employee")} />
            </View>
            <View style={[styles.buttons.general, styles.buttons.primary]}>
              <Button title="Employer" onPress={() => setType("Employer")} />
            </View>
          </View>
        )}
        {type ? (
          <View style={styles.loginContainer}>
            <Text style={styles.text}>{type} Log-In</Text>
            <LoginInput
              user={user}
              pass={pass}
              setUsername={setUsername}
              setPassword={setPassword}
            />
            <View>
              <View style={[styles.buttons.general, styles.buttons.secondary]}>
                <Button
                  title="Enter"
                  onPress={() => goToDashboard(user, pass)}
                />
              </View>
              <Button color="red" title="Go Back" onPress={() => setType("")} />
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenContainer: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  images: {
    header: {
      width: 400,
      height: 250,
      left: -20,
      borderBottomLeftRadius: 250,
      borderBottomRightRadius: 250,
      marginBottom: 50,
    },
    logo: {
      width: 300,
      height: 150,
    },
  },
  loginContainer: {
    height: "50%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    general: {
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
    primary: {
      color: "#4e6664",
      backgroundColor: "#96c8d0",
    },
    secondary: {
      backgroundColor: "#f2cda0",
    },
  },
  text: {
    color: "#4e6664",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 10,
  },
});

export default Login;
