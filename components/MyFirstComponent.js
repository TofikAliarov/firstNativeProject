import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

export default function MyFirstComponent() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <View style={styles.container}>
        <Text>You typed: {value}</Text>
      <TextInput
        placeholder="Type text"
        value={value}
        onChangeText={inputHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
