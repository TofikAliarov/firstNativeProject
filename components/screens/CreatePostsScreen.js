import React from "react";
import { Text, StyleSheet } from "react-native";

export default function CreatePostsScreen() {
  return <Text style={styles.text}>CreatePostsScreen</Text>;
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
