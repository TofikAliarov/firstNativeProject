import React from "react";
import { Text, StyleSheet } from "react-native";

export default function PostsScreen() {
  return <Text style={styles.text}>PostsScreen</Text>;
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
