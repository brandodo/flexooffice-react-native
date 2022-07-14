import { View, Text, StyleSheet, ImageBackground } from "react-native";

const API_URL = "https://flexooffice-server.herokuapp.com";

const Event = ({ data }) => {
  const { eventinfo } = data;
  const { name, date, time, location, imageSmall, imageLarge } = eventinfo;
  const imageUrl = `${API_URL}/${imageSmall}`;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={{ width: 200 }}
        resizeMode="cover"
      >
        <Text>{name}</Text>
        <Text>{location}</Text>
        <Text>
          {time}, {date}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginRight: 15,
    height: 200,
  },
});

export default Event;
