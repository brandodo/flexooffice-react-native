import { StyleSheet, View, TextInput, Text } from "react-native";

const LoginInput = ({ user, pass, setUsername, setPassword }) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.textbox}
          value={user}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>Password:</Text>
        <TextInput
          style={styles.textbox}
          value={pass}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
  },
  textbox: {
    width: 300,
    height: 40,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#5b8783",
  },
});

export default LoginInput;
