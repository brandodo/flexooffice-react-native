import { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Dashboard from "./src/screens/Dashboard";

const API_URL = "https://flexooffice-server.herokuapp.com";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fdf8f4",
  },
});

export default function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("hannah@brainstation.com");
  const [password, setPassword] = useState("brainstation");
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login">
          {(props) => (
            <Login
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
