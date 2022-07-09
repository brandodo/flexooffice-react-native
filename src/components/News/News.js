import { useState, useEffect } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import axios from "axios";

const API_URL = "https://newsapi.org/v2/top-headlines?";
const API_KEY = "b353c6a7e87343ebac96610b13665c2b";

const News = () => {
  const [headline, setHeadline] = useState("");
  const [link, setLink] = useState("");

  const fetchNewsData = async () => {
    try {
      const { data } = await axios.get(`${API_URL}q=covid&apiKey=${API_KEY}`);
      const { articles } = data;
      const dataArrLength = articles.length;
      const random = Math.floor(Math.random() * dataArrLength);

      setHeadline(articles[random].title);
      setLink(articles[random].url);
    } catch (err) {
      return alert(err);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.text.header, styles.text.general]}>
        What's New...
      </Text>
      <Text
        style={[styles.text.p, styles.text.general]}
        onPress={() => {
          Linking.openURL(link);
        }}
      >
        {headline}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#5b8783",
  },
  text: {
    general: {
      color: "#fff",
    },
    header: {
      fontSize: 23,
      fontWeight: "700",
      paddingBottom: 10,
    },
    p: {
      fontSize: 18,
    },
  },
});

export default News;
