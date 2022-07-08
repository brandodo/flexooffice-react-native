import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./src/pages/LoginPage";
import Dashboard from "./src/pages/Dashboard";

const API_URL = "https://flexooffice-server.herokuapp.com";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "beige",
  },
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "beige",
  },
});

export default function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("hannah@brainstation.com");
  const [password, setPassword] = useState("brainstation");
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login">
          {(props) => (
            <LoginPage
              {...props}
              user={username}
              pass={password}
              setUsername={setUsername}
              setPassword={setPassword}
              setUser={setUser}
              API_URL={API_URL}
              bg={styles.background}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Dashboard">
          {(props) => (
            <Dashboard {...props} data={user} bg={styles.background} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
