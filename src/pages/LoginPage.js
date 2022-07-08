import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import axios from "axios";

const LoginPage = ({
  API_URL,
  navigation,
  user,
  pass,
  setUsername,
  setPassword,
  setUser,
  bg,
}) => {
  const goToDashboard = async (email, password) => {
    try {
      const validateUser = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      setUser(validateUser.data);
      navigation.navigate("Dashboard");
    } catch (err) {
      return alert(err);
    }
  };

  return (
    <View style={[bg, styles.container]}>
      <Text>This is the Login page.</Text>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textbox}
          value={user}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.textbox}
          value={pass}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        title="Go to Dashboard"
        onPress={() => goToDashboard(user, pass)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  textbox: {
    width: "60%",
    backgroundColor: "lightgray",
    marginVertical: 5,
  },
});

export default LoginPage;
