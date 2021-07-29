import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return <Text style={styles.text}>ProfileScreen</Text>;
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
